const express = require("express");
const router = express.Router();
const { getPrivateInfo } = require("../controllers/private");
const { protect, protectAndAuthorize } = require("../middleware/protectAuth");

router.route("/").get(protect, protectAndAuthorize, getPrivateInfo);

module.exports = router;
