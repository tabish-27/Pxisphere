const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");

router.get("/client", authMiddleware(["client"]), (req, res) => {
    res.json({ msg: "Hello Client!" });
});

router.get("/partner", authMiddleware(["partner"]), (req, res) => {
    res.json({ msg: "Hello Partner!" });
});

router.get("/admin", authMiddleware(["admin"]), (req, res) => {
    res.json({ msg: "Hello Admin!" });
});

module.exports = router;
