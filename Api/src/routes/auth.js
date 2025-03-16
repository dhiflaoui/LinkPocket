const express = require("express");
const { register } = require("../handlers/auth");
const response = require("../utils/response");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    return await register(req, res);
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
