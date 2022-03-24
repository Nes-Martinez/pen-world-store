require("dotenv").config();
const User = require("../models/User");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    const { password, ...otherInfo } = user._doc;
    res.status(200).json(otherInfo);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const newInfo = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: newInfo,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    console.log("Update error", err);
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete({
      _id: req.params.id,
    });

    res.status(200).json("User deleted successfully");
  } catch (err) {
    console.log("Delete error", err);
    next(err);
  }
};

module.exports = {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
