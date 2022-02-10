const userData = require("./users");
const User = require("../models/User");
const connectDB = require("../config/db");
const mongoose = require("mongoose");

const importData = async () => {
  try {
    connectDB();
    // await mongoose.connection.dropDatabase();
    await User.insertMany(userData);
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.error("Error with data import!");
    process.exit(1);
  }
};

importData();
