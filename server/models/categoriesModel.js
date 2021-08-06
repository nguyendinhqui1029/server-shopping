"use strict";

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
    type: [Schema.Types.ObjectId],
    ref: "Categories",
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

var CategoriesModel = mongoose.model("Categories", CategoriesSchema);

module.exports = CategoriesModel;