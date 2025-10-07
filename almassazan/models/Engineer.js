import { Schema } from "mongoose";
const mongoose = require("mongoose");
const schema = new Schema({
  fa_fullName: {
    type: String,
    require: true,
  },
  en_fullName: {
    type: String,
    require: true,
  },
  fa_role: {
    type: String,
    require: true,
  },
  en_role: {
    type: String,
    require: true,
  },

  fa_evidence: {
    type: String,
    require: true,
  },
  en_evidence: {
    type: String,
    require: true,
  },
  fa_workRecords: {
    type: [String],
    require: true,
  },
  en_workRecords: {
    type: [String],
    require: true,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
});

const model = mongoose.models.Engineer || mongoose.model("Engineer", schema);

module.exports = model;
