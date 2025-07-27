const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    rating: Number,
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
