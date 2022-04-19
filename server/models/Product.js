const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inventoryNum: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  featuredImage: {
    type: String,
    default:
      "https://drive.google.com/file/d/1mNQCqgdvayiaTUP9w1Ua0wXfYuTmbgMw/view?usp=sharing",
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
