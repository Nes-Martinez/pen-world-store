const User = require('../models/User')

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
  } catch (error) {
    res.status(500).json({
      sucesss: false,
      error: error.message,
    })
  }
};

const login = async (req, res, next) => {
  try {
    res.send("You've logged in!");
  } catch (error) {
    console.error(error);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    res.send("You forgot your password?");
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
