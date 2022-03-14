const express = require("express");
const router = express.Router();
const { getPrivateInfo } = require("../controllers/private");
const { protect } = require("../middleware/protectAuth");

router.route("/").get(protect, getPrivateInfo);

module.exports = router;
