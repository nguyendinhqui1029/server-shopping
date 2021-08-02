"use strict";
var UserModel = require("../models/userModel");

class UserRepository {
  constructor() {}

  async AddUser(user) {
    const users = new UserModel(user);
    return users.save();
  }

  async GetAllAsync(filter, limit, page) {
    return UserModel.find(filter, null, { limit: limit, skip: page }).exec();
  }

  async GetUserByEmail(email) {
    return UserModel.findOne({ email: email }).exec();
  }

  async GetCountAsync(filter = {}) {
    return UserModel.where(filter).countDocuments();
  }

  async UpdateUserAsync(user) {
    return UserModel.findByIdAndUpdate(user._id,user);
  }
}

module.exports = UserRepository;
