const express = require("express");
const router = express.Router();

// Add authentication middleware
const authenticateToken = require("../middleware/authenticateToken");

// Models
const Company = require("../models/Company");

// Create a new company
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newCompany = new Company({ name, email, password });
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add other company-related routes as needed

module.exports = router;
