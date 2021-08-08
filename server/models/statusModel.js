"use strict";
var DBAccess = require("../dbAccess");
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
var connection = new DBAccess().connectDB();
var StatusModel = connection.model("Status", StatusSchema);

module.exports = StatusModel;
