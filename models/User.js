const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
        type: String,
        enum: ["client", "partner", "admin"],
        default: "client",
    },
});

module.exports = mongoose.model("User", userSchema);
