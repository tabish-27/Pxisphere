const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
    inquiryId: { type: mongoose.Schema.Types.ObjectId, ref: "Inquiry" },
    partnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: {
        type: String,
        enum: ["new", "responded", "booked", "closed"],
        default: "new"
    }
}, { timestamps: true });

module.exports = mongoose.model("Lead", leadSchema);
