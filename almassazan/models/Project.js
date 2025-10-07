const mongoose = require("mongoose");
import { Schema } from "mongoose";

const schema = new Schema({
  fa_title: {
    type: String,
    required: true
  },
  fa_employer: {
    type: String,
    required: true,  // Corrected here
  },
  fa_startDate: {
    type: {
      year:String,
      month:String
    },
    required: true,  // Corrected here
  },
  fa_duration: {
    type: String,
    required: true,  // Corrected here
  },
  fa_description: {
    type: String,
    required: true,  // Corrected here
  },
  en_title: {
    type: String,
    required: true,  // Corrected here
  },
  en_employer: {
    type: String,
    required: true,  // Corrected here
  },
  en_startDate: {
    type: {
      year:String,
      month:String
    }
    ,
    required: true,  // Corrected here
  },
  en_duration: {
    type: String,
    required: true,  // Corrected here
  },
  en_description: {
    type: String,
    required: true,  // Corrected here
  },
  images: {
    type: [String],
  },
});

const model = mongoose.models.Project || mongoose.model("Project", schema);

module.exports = model;
