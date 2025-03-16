const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv/config");

// Generate a hash for a password
exports.generateHash = (password) => {
  return bcrypt.hashSync(password, 10);
};

// Generates a jwt token
exports.generateToken = (user) => {
  if (!user || !user.userId) {
    throw new Error("Invalid user data for token generation");
  }

  return jwt.sign(
    {
      userId: user.userId,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

// Generates a random hash for email verification
exports.generateRandomToken = () => {
  return crypto.randomBytes(32).toString("hex");
};
