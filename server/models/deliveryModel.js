"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * DeliverySchema
 */
var DeliverySchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  fee: {
    type: Number,
    trim: true,
    required: true,
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
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

var DeliveryModel = mongoose.model("Delivery", DeliverySchema);

module.exports = DeliveryModel;
