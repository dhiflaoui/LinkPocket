const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const TokenSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: "Please provide a user ",
  },
  token: {
    type: String,
    required: "Please provide a token",
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
});
TokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 43200 }); //12 HOURS
module.exports = mongoose.model("Token", TokenSchema);
