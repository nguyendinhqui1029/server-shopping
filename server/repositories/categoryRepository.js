"use strict";
var CategoryModel = require("../models/categoriesModel");

class CategoryRepository {
  constructor() {}

  async AddCategoryAsync(newCategory) {
    try {
      const category = new CategoryModel(newCategory);
      return category.save();
    } catch (error) {
      throw error;
    }
  }

  async GetAllCategoryAsync(filter, limit, page) {
    return CategoryModel.find(filter, null, {
      limit: limit,
      skip: page,
    }).exec();
  }

  async GetCategoryByIDAsync(idCategory) {
    return CategoryModel.findOne({ _id: idCategory }).exec();
  }

  async GetCountAsync(filter = {}) {
    return CategoryModel.where(filter).countDocuments();
  }

  async UpdateCategoryAsync(category) {
    return CategoryModel.findByIdAndUpdate(category._id, category);
  }

  async DeleteCategoryByIdAsync(idCategory) {
    return CategoryModel.findOneAndDelete({ _id: idCategory });
  }
}

module.exports = CategoryRepository;
