const mongoose = require("mongoose");
const {
  generateToken,
  generateHash,
  generateRandomToken,
} = require("../../utils/crypto");
const { parseUser } = require("../../utils/parseUser");
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
    const user = User.create({ email, password: generateHash(password), name });

    await Token.create({
      userId: user._id,
      token: generateRandomToken(),
    });
    const token = generateToken(user);
    const userData = parseUser(user);

    res.status(201).json({ user: userData, token });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
