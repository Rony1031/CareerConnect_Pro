const Company = require("../models/Company");

const createCompany = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newCompany = new Company({ name, email, password });
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCompany,
};
