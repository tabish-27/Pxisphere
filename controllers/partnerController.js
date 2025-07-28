// ==== Imports ====
const Lead = require("../models/Lead");
const Inquiry = require("../models/Inquiry");
const Partner = require("../models/Partner");

// ==== Lead Controllers ====

exports.getAssignedLeads = async (req, res) => {
    const leads = await Lead.find({ partnerId: req.user.id })
        .populate("inquiryId");
    res.json(leads);
};

exports.updateLeadStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const allowed = ["responded", "booked", "closed"];
    if (!allowed.includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const lead = await Lead.findByIdAndUpdate(id, { status }, { new: true });
    res.json({ msg: "Lead updated", lead });
};

// ==== Partner Controllers ====

exports.onboardPartner = async (req, res) => {
    try {
        const { name, city, serviceCategory, documentId, portfolioLinks } = req.body;

        const existing = await Partner.findOne({ userId: req.user.id });
        if (existing) return res.status(400).json({ error: "Already submitted" });

        const partner = await Partner.create({
            userId: req.user.id,
            name,
            city,
            serviceCategory,
            documentId,
            portfolioLinks,
        });

        res.status(201).json({ msg: "Submitted for verification", partner });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ==== Placeholder Portfolio Functions (Add your logic here) ====

exports.addPortfolio = (req, res) => { /* TODO */ };
exports.editPortfolio = (req, res) => { /* TODO */ };
exports.deletePortfolio = (req, res) => { /* TODO */ };
exports.reorderPortfolio = (req, res) => { /* TODO */ };
