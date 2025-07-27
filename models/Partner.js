const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: String,
    city: String,
    serviceCategory: String,
    documentId: String,
    portfolioLinks: [String],
    status: {
        type: String,
        enum: ["pending", "verified", "rejected"],
        default: "pending",
    },
    adminComment: String
}, { timestamps: true });

module.exports = mongoose.model("Partner", partnerSchema);
