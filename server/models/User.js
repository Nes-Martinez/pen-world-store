const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwtoken = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getToken = function () {
  return jwtoken.sign({ id: this._id }, process.env.JWTOKEN_SECRET, {
    expiresIn: process.env.JWTOKEN_EXPIRE,
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
