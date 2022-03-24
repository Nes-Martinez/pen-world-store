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

const protectAndAuthorize = async (req, res, next) => {
  protect(req, res, () => {
    try {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(new ErrorResponse("Not authorized, not user", 403));
      }
    } catch (error) {
      return next(new ErrorResponse("Not authorized error", 401));
    }
  });
};

const protectAndAdmin = async (req, res, next) => {
  protect(req, res, () => {
    try {
      if (!req.user.isAdmin) {
        return next(new ErrorResponse("Not authorized", 403));
      }

      next();
    } catch (error) {
      return next(new ErrorResponse("Not authorized error", 401));
    }
  });
};

module.exports = {
  protect,
  protectAndAuthorize,
  protectAndAdmin,
};
