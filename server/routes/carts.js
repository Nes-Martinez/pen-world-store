const express = require("express");
const router = express.Router();
const {
  protect,
  protectAndAuthorize,
  protectAndAdmin,
} = require("../middleware/protectAuth");
const {
  getCarts,
  createCart,
  updateCart,
  deleteCart,
  getSingleCart,
} = require("../controllers/cart");

router.get("/", protectAndAdmin, getCarts);

router.get("/:userId", protectAndAuthorize, getSingleCart);

router.post("/", protect, createCart);

router.put("/:id", protectAndAuthorize, updateCart);

router.delete("/:id", protectAndAuthorize, deleteCart);

module.exports = router;
