"use strict";
var StatusModel = require("../models/statusModel");

class StatusRepository {
  constructor() {}

  async AddStatusAsync(newStatus) {
    try {
      const status = new StatusModel(newStatus);
      return status.save();
    } catch (error) {
      throw error;
    }
  }

  async GetAllStatusAsync(filter, limit, page) {
    return StatusModel.find(filter, null, {
      limit: limit,
      skip: page,
    }).exec();
  }

  async GetStatusByIDAsync(idStatus) {
    return StatusModel.findOne({ _id: idStatus }).exec();
  }

  async GetCountAsync(filter = {}) {
    return StatusModel.where(filter).countDocuments();
  }

  async UpdateStatusAsync(status) {
    return StatusModel.findByIdAndUpdate(status._id, status);
  }

  async DeleteStatusByIdAsync(idStatus) {
    return StatusModel.findOneAndDelete({ _id: idStatus });
  }
}

module.exports = StatusRepository;
