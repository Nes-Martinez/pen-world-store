const register = async (req, res, next) => {
  try {
    res.send("You've registered!");
  } catch (error) {
    console.error(error);
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
