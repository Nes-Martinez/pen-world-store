const express = require("express");
const router = express.Router();
const {
  protectAndAuthorize,
  protectAndAdmin,
} = require("../middleware/protectAuth");
const {
  getUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controllers/user");

router.get("/", protectAndAdmin, getUsers);

router.get("/:id", protectAndAuthorize, getSingleUser);

router.put("/:id", protectAndAuthorize, updateUser);

router.delete("/:id", protectAndAdmin, deleteUser);

module.exports = router;
