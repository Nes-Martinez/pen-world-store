const express = require("express");
const router = express.Router();
const { protectAndAdmin } = require("../middleware/protectAuth");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getFeaturedProducts,
} = require("../controllers/product");

router.get("/", getProducts);

router.get("/featured", getFeaturedProducts);

router.get("/:id", getSingleProduct);

router.post("/", protectAndAdmin, createProduct);

router.put("/:id", protectAndAdmin, updateProduct);

router.delete("/:id", protectAndAdmin, deleteProduct);

module.exports = router;
