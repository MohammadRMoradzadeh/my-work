const { roles } = require("@/utils/dataContainer");
const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: roles.USER,
    },
    profile_image: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.User || mongoose.model("User", schema);

module.exports = model;
