const Partner = require("../models/Partner");

exports.getPendingPartners = async (req, res) => {
    const pending = await Partner.find({ status: "pending" });
    res.json(pending);
};

exports.verifyPartner = async (req, res) => {
    const { id } = req.params;
    const { status, comment } = req.body;

    if (!["verified", "rejected"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const partner = await Partner.findByIdAndUpdate(id, {
        status,
        adminComment: comment
    }, { new: true });

    res.json({ msg: "Partner status updated", partner });
};


const Inquiry = require("../models/Inquiry");

exports.getStats = async (req, res) => {
    const totalClients = await User.countDocuments({ role: "client" });
    const totalPartners = await User.countDocuments({ role: "partner" });
    const pendingVerifications = await Partner.countDocuments({ status: "pending" });
    const totalInquiries = await Inquiry.countDocuments();

    res.json({
        totalClients,
        totalPartners,
        pendingVerifications,
        totalInquiries
    });
};


const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
};

exports.deleteReview = async (req, res) => {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.json({ msg: "Review deleted" });
};



const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(category);
};

exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
    res.json(category);
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.json({ msg: "Deleted" });
};
