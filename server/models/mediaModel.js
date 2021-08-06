"use strict";
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var MediaSchema = new Schema({
  type: {
    type: Schema.Types.ObjectId,
    ref: "Type",
    required: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
  updatedAt: {
    type: Number,
    default: Date.now,
  },
});

var MediaModel = mongoose.model("Media", MediaSchema);

module.exports = MediaModel;

