const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const salt = bcrypt.genSaltSync(12);

// Generate a hash for a password
exports.generateHash = (password) => {
  return bcrypt.hashSync(password, salt);
};

// Generates a jwt token
exports.generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: 60 * 60 * 24 * 7 }
  );
};
// Generates a random hash for email verification
exports.generateRandomToken = () => {
  return crypto.randomBytes(20).toString("hex");
};
