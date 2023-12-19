const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Models
const Company = require("./models/Company");
const Candidate = require("./models/Candidate");

// JWT Secret Key
const secretKey = "career-connect-pro";

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
};

// Routes
const companyRoutes = require("./routes/companyRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

app.use("/api/companies", authenticateToken, companyRoutes);
app.use("/api/candidates", authenticateToken, candidateRoutes);

// Login endpoint for both companies and candidates
app.post("/api/login", async (req, res) => {
  const { email, password, userType } = req.body;

  let user;
  if (userType === "company") {
    user = await Company.findOne({ email, password });
  } else if (userType === "candidate") {
    user = await Candidate.findOne({ email, password });
  }

  if (user) {
    const token = jwt.sign({ email, userType }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
