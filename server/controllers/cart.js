require("dotenv").config();
const Cart = require("../models/Cart");

const getCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find({});
    res.status(200).json(carts);
  } catch (err) {
    next(err);
  }
};

const getSingleCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
};

const createCart = async (req, res, next) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    next(err);
  }
};

const updateCart = async (req, res, next) => {
  const newInfo = req.body;

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: newInfo,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (err) {
    console.log("Update error", err);
    next(err);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete({
      _id: req.params.id,
    });

    res.status(200).json("Cart deleted successfully");
  } catch (err) {
    console.log("Delete error", err);
    next(err);
  }
};

module.exports = {
  getCarts,
  getSingleCart,
  createCart,
  updateCart,
  deleteCart,
};
