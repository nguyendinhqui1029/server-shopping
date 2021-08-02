"use strict";
var TypeModel = require("../models/TypeModel");

class TypeRepository {
  constructor() {}

  async AddTypeAsync(type) {
    try {
      const users = new TypeModel(type);
      return users.save();
    } catch (error) {
      throw error;
    }
  }

  async GetAllTypeAsync(filter, limit, page) {
    return TypeModel.find(filter, null, { limit: limit, skip: page }).exec();
  }

  async GetTypeByIDAsync(idType) {
    return TypeModel.findOne({ _id: idType }).exec();
  }

  async GetCountAsync(filter = {}) {
    return TypeModel.where(filter).countDocuments();
  }

  async UpdateTypeAsync(type) {
    return TypeModel.findByIdAndUpdate(type._id, type);
  }

  async DeleteTypeByIdAsync(idType) {
    return TypeModel.findOneAndDelete({_id:idType});
  }
}

module.exports = TypeRepository;
