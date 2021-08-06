"use strict";
var jsonwebtoken = require("jsonwebtoken"),
  config = require("../common/config"),
  errors = require("../common/errorMessage"),
  CategoryRepository = require("../repositories/productsRepository"),
  productsRepo = new CategoryRepository();

exports.AddCategory = async function (req, res) {
  try {
    const category = {
      group: req.body.group,
      subCategory: req.body.subCategory,
      name: req.body.name,
      status: req.body.status
    };
    productsRepo.AddProductsAsync(category).then((result) => {
      res.send({ status: 200, body: { data: result } });
    });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.GetAllCategory = async function (req, res) {
  try {
    const limit = parseInt(req.params.limit) || 10;
    const page = parseInt(req.params.page) || 0;
    productsRepo.GetAllProductsAsync({}, limit, page).then((result) => {
      productsRepo.GetCountAsync({}).then((count) => {
        res.send({
          staus: 200,
          body: {
            data: result,
            pagination: {
              limit: limit,
              page: page,
              totalRow: count,
            },
          },
        });
      });
    });
  } catch (error) {
    res.send({
      staus: 400,
      body: {
        data: error,
      },
    });
  }
};

exports.GetCategoryByID = async function (req, res) {
  try {
    productsRepo.GetProductsByIDAsync(req.params.id).then((result) => {
      res.send({
        staus: 200,
        body: {
          data: result,
        },
      });
    });
  } catch (error) {
    res.send({
      staus: 400,
      body: {
        data: error,
      },
    });
  }
};

exports.UpdateCategorysById = async function (req, res) {
  try {
    productsRepo
      .UpdateProductsAsync({ ...req.body, updatedAt: new Date().valueOf() })
      .then((result) => {
        res.send({ status: 200, body: { data: result } });
      });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.DeleteCategoryById = async function (req, res) {
  try {
    productsRepo.DeleteProductsByIdAsync(req.params.id).then((result) => {
      res.send({ status: 200, body: { data: result } });
    });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.IsAuthenticated = function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === config.jwtToken.key
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      config.jwtToken.secret,
      function (err, decode) {
        if (err || decode === undefined) {
          req.user = undefined;
          return res.json({ message: errors.unauthorized });
        } else {
          req.user = decode;
          var current = new Date();
          if (current.getTime() > decode.exp) {
            return res.json({ message: errors.unauthorized });
          }
          return next();
        }
      }
    );
  } else {
    req.user = undefined;
    return res.json({ message: errors.unauthorized });
  }
};
