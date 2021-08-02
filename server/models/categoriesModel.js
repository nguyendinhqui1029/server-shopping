"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var CategoriesSchema = new Schema({
  idSubCategory: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  idStatus: {
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

var CategoriesModel = mongoose.model("Categories", CategoriesSchema);

module.exports = CategoriesModel;