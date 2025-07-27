const Partner = require("../models/Partner");

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
