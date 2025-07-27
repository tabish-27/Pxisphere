const Lead = require("../models/Lead");
const Inquiry = require("../models/Inquiry");

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


// ==== Lead-related Controllers ====

const Lead = require("../models/Lead");
const Inquiry = require("../models/Inquiry");

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


module.exports = {
    onboardPartner,
    getAssignedLeads,
    updateLeadStatus,
    addPortfolio,
    editPortfolio,
    deletePortfolio,
    reorderPortfolio
};