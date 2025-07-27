const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { getPendingPartners, verifyPartner } = require("../controllers/adminController");

router.get("/verifications", auth(["admin"]), getPendingPartners);
router.put("/verify/:id", auth(["admin"]), verifyPartner);

module.exports = router;


const {
    getStats,
    getReviews,
    deleteReview,
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require("../controllers/adminController");

router.get("/stats", auth(["admin"]), getStats);
router.get("/reviews", auth(["admin"]), getReviews);
router.delete("/reviews/:id", auth(["admin"]), deleteReview);

router.post("/categories", auth(["admin"]), createCategory);
router.get("/categories", auth(["admin"]), getCategories);
router.put("/categories/:id", auth(["admin"]), updateCategory);
router.delete("/categories/:id", auth(["admin"]), deleteCategory);
