"use strict";

var mongoose = require("mongoose");
var DBAccess = require("../dbAccess");
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  email: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  district: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  type: {
    type: Schema.Types.ObjectId, 
    ref: 'Type'
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
var AddressModel = connection.model("Address", AddressSchema);

module.exports = AddressModel;
