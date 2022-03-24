const express = require("express");
const router = express.Router();
const {
  protect,
  protectAndAuthorize,
  protectAndAdmin,
} = require("../middleware/protectAuth");
const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
} = require("../controllers/order");

router.get("/", protectAndAdmin, getOrders);
router.get("/:userId", protectAndAuthorize, getSingleOrder);
router.post("/", protect, createOrder);
router.put("/:id", protectAndAdmin, updateOrder);
router.delete("/:id", protectAndAdmin, deleteOrder);

module.exports = router;
