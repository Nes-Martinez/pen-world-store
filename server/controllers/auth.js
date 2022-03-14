require("dotenv").config();
const crypto = require("crypto");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);
    console.log(isMatch, "isMATCH???");

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 201, res);
  } catch (err) {
    res.status(500).json({ sucess: false, error: err.message });
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Please check your email", 404));
    }

    const resetToken = user.getResetToken();

    await user.save();

    const resetUrl = `process.env.RESET_URL${resetToken}`;

    const message = `
      <h1>You have requested a password reset.</h1>
      <p>Please go to this link to reset your password.</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset",
        text: message,
      });

      res.status(200).json({ sucess: true, data: "email sent" });
    } catch (error) {
      user.resetPassToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  const resetPassToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPassToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid reset token", 400));
    }

    user.password = req.body.password;
    user.resetPassToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      sucess: true,
      data: "Password reset successfully",
    });
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getToken();
  res.status(statusCode).json({ sucess: true, token });
};

module.exports = {
  register,
  login,
  resetPassword,
  forgotPassword,
};
