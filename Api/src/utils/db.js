const mongoose = require("mongoose");

require("dotenv").config();
let connection;
const connect = async (connectionURI) => {
  const uri = connectionURI || process.env.MONGO_URI;
  try {
    connection = await mongoose.connect(uri);
    return connection;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
const disconnect = async () => {
  await mongoose.disconnect();
};
const getConnection = () => {
  return connection;
};
module.exports = { connect, disconnect, getConnection };
