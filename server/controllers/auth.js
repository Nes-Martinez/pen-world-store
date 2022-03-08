const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    res.status(201).json({
      sucess: true,
      token: "fefefge",
    });
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    res.send("Password forgot?");
  } catch (error) {
    console.error(error);
  }
};

const resetPassword = (req, res, next) => {
  try {
    res.send("Password reset.");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  register,
  login,
  resetPassword,
  forgotPassword,
};
