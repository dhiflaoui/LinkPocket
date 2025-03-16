const mongoose = require("mongoose");
const {
  generateToken,
  generateHash,
  generateRandomToken,
} = require("../../utils/crypto");
const { parseUser } = require("../../utils/parseUser");
const { sendVerification } = require("../../utils/mail");
const User = mongoose.model("User");
const Token = mongoose.model("Token");

exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existing = await User.findOne({ email }); // Check if the user already exists
    if (existing) {
      return res.status(400).json({ error: "User already exists" });
    }
    // Create a new user
    try {
      const user = await User.create({
        email,
        password: generateHash(password),
        name,
      });
      const { token: emailToken } = await Token.create({
        user: user._id,
        token: generateRandomToken(),
      });
      await sendVerification({ email, token: emailToken });
      const authToken = generateToken(user);
      const userData = parseUser(user);

      return res.status(201).json({
        success: true,
        user: userData,
        token: authToken,
      });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({
        error: "Internal server error",
        details: error.message,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
