"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var ProductSchema = new Schema({
  productName: {
    type: String,
    trim: true,
    required: true,
  },
  subContent: {
    type: String,
    trim: true,
    required: true,
  },
  detailContent: {
    type: String,
    trim: true,
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  isHot: {
    type: Boolean,
    default: false,
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


var ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

