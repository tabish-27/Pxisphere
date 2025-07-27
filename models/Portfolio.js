const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    partnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: String,
    description: String,
    index: Number, // for ordering
}, { timestamps: true });

module.exports = mongoose.model("Portfolio", portfolioSchema);
