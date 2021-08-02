"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var RolesSchema = new Schema({
  alias: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

var RolesModel = mongoose.model("Roles", RolesSchema);

module.exports = RolesModel;
