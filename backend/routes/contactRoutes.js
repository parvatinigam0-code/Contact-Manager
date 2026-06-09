const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Test Route
router.get("/test", (req, res) => {
  res.send("Contact Route Working");
});

// Add Contact
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("GET CONTACTS HIT");

    const contacts = await Contact.find();

    console.log("DATA:", contacts);

    res.status(200).json(contacts);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
