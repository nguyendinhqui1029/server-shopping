"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * StatusSchema
 */
var StatusSchema = new Schema({
  name: {
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

var StatusModel = mongoose.model("Status", StatusSchema);

module.exports = StatusModel;
