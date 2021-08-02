"use strict";

var mongoose = require("mongoose");
var DBAccess = require("../dbAccess");
var Schema = mongoose.Schema;

var TypeSchema = new Schema({
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
var TypeModel = connection.model("Type", TypeSchema);

module.exports = TypeModel;
