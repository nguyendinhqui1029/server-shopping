"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * OrderSchema
 */
var OrderSchema = new Schema({
  products: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
  },
  addressOther: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
    required: true,
  },
  delivery: {
    type: Schema.Types.ObjectId,
    ref: "Delivery",
    required: true,
  },
  payment: {
    type: Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    default: 0,
  },
  VAT: {
    type: Number,
    default: 0,
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


var ProductModel = mongoose.model("Order", OrderSchema);

module.exports = ProductModel;

