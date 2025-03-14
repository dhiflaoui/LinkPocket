const mongoose = require("mongoose");
require("dotenv").config();

let connection;

const connect = async (connectionURI) => {
  const uri = connectionURI || process.env.MONGODB_URI;

  try {
    connection = await mongoose.connect(uri);
    console.log("🌿 MongoDB Connected Successfully!");
    return connection;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    return error;
  }
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log("📢 MongoDB Disconnected");
  } catch (error) {
    console.error("❌ MongoDB Disconnect Error:", error.message);
  }
};

const getConnection = () => {
  return connection;
};

module.exports = { connect, disconnect, getConnection };
