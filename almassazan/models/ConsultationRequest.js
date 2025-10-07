const mongoose = require("mongoose");
const newDate =()=> new Date()

import { Schema } from "mongoose";
const schema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    length: {
      type: String,
      require: true,
    },
    width: {
      type: String,
      require: true,
    },
    file: {
      type: String,
    },
    useOfTheStructure: {
      type: String,
      require: true,
    },
    floors: {
      type: String,
      require: true,
    },
    foundation: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    isAnswered: {
      type: Boolean,
      default: false,
    },
    isEnLang: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default:newDate
    },
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models.ConsultationRequest ||
  mongoose.model("ConsultationRequest", schema);

module.exports = model;
