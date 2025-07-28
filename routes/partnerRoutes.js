const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const {
    onboardPartner,
    getAssignedLeads,
    updateLeadStatus,
    addPortfolio,
    editPortfolio,
    deletePortfolio,
    reorderPortfolio
} = require("../controllers/partnerController");

// Routes
router.post("/onboard", auth(["partner"]), onboardPartner);
router.get("/leads", auth(["partner"]), getAssignedLeads);
router.put("/leads/:id", auth(["partner"]), updateLeadStatus);

// Add other portfolio routes here if needed

module.exports = router;
