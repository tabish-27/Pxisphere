const Inquiry = require("../models/Inquiry");
const Lead = require("../models/Lead");
const Partner = require("../models/Partner");

exports.createInquiry = async (req, res) => {
    const { category, date, budget, city, referenceImageUrl } = req.body;

    const inquiry = await Inquiry.create({
        clientId: req.user.id,
        category,
        date,
        budget,
        city,
        referenceImageUrl
    });

    // Match partners by city & category
    const matchedPartners = await Partner.find({
        city,
        serviceCategory: category,
        status: "verified"
    });

    // Assign inquiry as leads
    const leadPromises = matchedPartners.map(partner =>
        Lead.create({ inquiryId: inquiry._id, partnerId: partner.userId })
    );
    await Promise.all(leadPromises);

    res.status(201).json({ msg: "Inquiry submitted & leads assigned", inquiry });
};
