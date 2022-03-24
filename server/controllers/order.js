require("dotenv").config();
const Order = require("../models/Order");

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

const getSingleOrder = async (req, res, next) => {
  try {
    const order = await Order.find({ userId: req.params.id });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  const newInfo = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: newInfo,
      },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    console.log("Update error", err);
    next(err);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete({
      _id: req.params.id,
    });

    res.status(200).json("Order deleted successfully");
  } catch (err) {
    console.log("Delete error", err);
    next(err);
  }
};

module.exports = {
  getOrders,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
