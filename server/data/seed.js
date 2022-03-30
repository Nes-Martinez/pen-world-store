const userData = require("./users");
const User = require("../models/User");
const productData = require("./products");
const Product = require("../models/Product");
const connectDB = require("../config/db");
const mongoose = require("mongoose");

const importData = async () => {
  try {
    connectDB();
    await mongoose.connection.dropDatabase();
    await User.create(userData);
    await Product.create(productData);
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.log(error);
    console.error("Error with data import!");
    process.exit(1);
  }
};

importData();
