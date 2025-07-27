const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const { onboardPartner } = require("../controllers/partnerController");

router.post("/onboard", auth(["partner"]), onboardPartner);

module.exports = router;


const { getAssignedLeads, updateLeadStatus } = require("../controllers/partnerController");

router.get("/leads", auth(["partner"]), getAssignedLeads);
router.put("/leads/:id", auth(["partner"]), updateLeadStatus);


const {
    onboardPartner,
    getAssignedLeads,
    updateLeadStatus,
    addPortfolio,
    editPortfolio,
    deletePortfolio,
    reorderPortfolio
} = require("../controllers/partnerController");
