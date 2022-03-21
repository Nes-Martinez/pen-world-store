const express = require("express");
const router = express.Router();
const { protectAndAuthorize, protect } = require("../middleware/protectAuth");
const { getUsers, update } = require("../controllers/user");
const { getPrivateInfo } = require("../controllers/private");

router.get("/", protectAndAuthorize, getUsers);
router.put("/:id", protectAndAuthorize, update);

module.exports = router;
