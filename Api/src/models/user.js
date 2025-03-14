const { v4: uuid, validate } = require("uuid");
const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcryptjs");
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    userId: {
      type: String,
      required: "Please provide a unique user id",
      unique: true,
      default: uuid,
    },
    name: {
      type: String,
      required: "Please provide a name",
    },
    email: {
      type: String,
      isLowercase: true,
      trim: true,
      unique: true,
      validate: {
        validator: (email) => validator.isEmail,
        message: "Please provide a valid email address",
      },
    },
    password: {
      type: String,
      required: "Please provide a hashed password",
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: "Please provide an account verification status",
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.methods.validatePassword = (password) => {
  if (!this.password) {
    return false;
  }
  return bycrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
