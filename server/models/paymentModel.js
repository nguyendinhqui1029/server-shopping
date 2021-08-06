"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

/**
 * PaymentSchema
 */
var PaymentSchema = new Schema({
  title: {
    type: String,
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

var PaymentModel = mongoose.model("Payment", PaymentSchema);

module.exports = PaymentModel;
