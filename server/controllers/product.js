require("dotenv").config();
const Product = require("../models/Product");

const getProducts = async (req, res, next) => {
  const queryCat = req.query.category;

  try {
    let products;

    if (queryCat) {
      products = await Product.find({
        category: {
          $in: [queryCat],
        },
      });
    } else {
      products = await Product.find({});
    }

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    // const { password, ...otherInfo } = user._doc;
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  const newInfo = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: newInfo,
      },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log("Update error", err);
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete({
      _id: req.params.id,
    });

    res.status(200).json("Product deleted successfully");
  } catch (err) {
    console.log("Delete error", err);
    next(err);
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
