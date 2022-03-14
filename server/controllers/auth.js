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
