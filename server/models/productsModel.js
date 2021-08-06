"use strict";
var DBAccess = require("../dbAccess");
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
  media: {
    type: [Schema.Types.ObjectId],
    ref: "Media",
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
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
    type: Number,
    default: Date.now,
  },
  updatedAt: {
    type: Number,
    default: Date.now,
  },
});

var connection = new DBAccess().connectDB();
var ProductModel = connection.model("Product", ProductSchema);

module.exports = ProductModel;

