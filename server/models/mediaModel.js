"use strict";
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var MediaSchema = new Schema({
  idProduct: {
    type: String,
    trim: true,
    required: true,
  },
  idType: {
    type: String,
    trim: true,
    required: true,
  },
  idStatus: {
    type: String,
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date().valueOf()
  },
  updatedAt: {
    type: Date,
    default: Date().valueOf()
  },
});

var MediaModel = mongoose.model("Media", MediaSchema);

module.exports = MediaModel;

