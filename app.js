const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// Rate limiting and logging
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

dotenv.config();
connectDB();

const app = express();

// Logging
app.use(morgan("dev"));
// Rate limiting (100 requests per 15 minutes per IP)
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
}));
app.use(cors());
app.use(express.json());

// Swagger API docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/partner", require("./routes/partnerRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/inquiry", require("./routes/inquiryRoutes"));


// Default route to test
app.get("/", (req, res) => {
    res.send("Pixisphere API is running...");
});

// Example: Mount auth routes
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
