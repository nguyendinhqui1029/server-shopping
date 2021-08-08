"use strict";
var DBAccess = require("../dbAccess");
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var CategoriesSchema = new Schema({
  group: {
    type: String,
    trim: true,
  },
  subCategory: {
    type: [Object],
  },
  name: {
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
var CategoriesModel = connection.model("Categories", CategoriesSchema);

module.exports = CategoriesModel;