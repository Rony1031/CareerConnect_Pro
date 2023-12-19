const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authenticateToken");

const Candidate = require("../models/Candidate");

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newCandidate = new Candidate({ name, email, password });
    const savedCandidate = await newCandidate.save();
    res.status(201).json(savedCandidate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
