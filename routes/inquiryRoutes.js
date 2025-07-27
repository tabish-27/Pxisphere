const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { createInquiry } = require("../controllers/inquiryController");

router.post("/", auth(["client"]), createInquiry);

module.exports = router;
