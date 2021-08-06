"use strict";

var mongoose = require("mongoose");
var DBAccess = require("../dbAccess");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
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
var ContactModel = connection.model("Contact", ContactSchema);

module.exports = ContactModel;
