const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: String,
    date: Date,
    budget: Number,
    city: String,
    referenceImageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Inquiry", inquirySchema);
