const jwtoken = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized", 401));
  }

  try {
    const decoded = jwtoken.verify(token, process.env.JWTOKEN_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this ID", 404));
    }

    req.user = user;

    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized", 401));
  }
};

module.exports = {
  protect,
};
