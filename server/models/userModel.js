"use strict";
var mongoose = require("mongoose");
var DBAccess = require("../dbAccess");
var  Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  idRole: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  idType: {
    type: String,
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
var UserModel = connection.model("User", UserSchema);
module.exports = UserModel;
