"use strict";
var ProductModel = require("../models/ProductsModel");

class ProductsRepository {
  constructor() {}

  async AddProductsAsync(product) {
    try {
      const products = new ProductModel(product);
      return products.save();
    } catch (error) {
      throw error;
    }
  }

  async GetAllProductsAsync(filter, limit, page) {
    return ProductModel.find(filter, null, { limit: limit, skip: page }).exec();
  }

  async GetProductsByIDAsync(idProducts) {
    return ProductModel.findOne({ _id: idProducts }).exec();
  }

  async GetCountAsync(filter = {}) {
    return ProductModel.where(filter).countDocuments();
  }

  async UpdateProductsAsync(product) {
    return ProductModel.findByIdAndUpdate(product._id, product);
  }

  async DeleteProductsByIdAsync(idProduct) {
    return ProductModel.findOneAndDelete({ _id: idProduct });
  }
}

module.exports = ProductsRepository;
