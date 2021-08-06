"use strict";
var RolesModel = require("../models/RolesModel");

class RolesRepository {
  constructor() {}

  async AddRolesAsync(role) {
    try {
      const roles = new RolesModel(role);
      return roles.save();
    } catch (error) {
      throw error;
    }
  }

  async GetAllRolesAsync(filter, limit, page) {
    return RolesModel.find(filter, null, { limit: limit, skip: page }).exec();
  }

  async GetRolesByIDAsync(idRoles) {
    return RolesModel.findOne({ _id: idRoles }).exec();
  }

  async GetCountAsync(filter = {}) {
    return RolesModel.where(filter).countDocuments();
  }

  async UpdateRolesAsync(role) {
    return RolesModel.findByIdAndUpdate(role._id, role);
  }

  async DeleteRoleByIdAsync(idRole) {
    return RolesModel.findOneAndDelete({ _id: idRole });
  }
}

module.exports = RolesRepository;
