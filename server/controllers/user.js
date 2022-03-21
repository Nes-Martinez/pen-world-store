require("dotenv").config();
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  // const { id } = req.params.id;
  const newInfo = req.body;

  console.log("newInfo", newInfo);

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

module.exports = {
  getUsers,
  update,
};
