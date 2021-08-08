"use strict";
var jsonwebtoken = require("jsonwebtoken"),
  config = require("../common/config"),
  errors = require("../common/errorMessage"),
  StatusRepository = require("../repositories/statusRepository"),
  statusRepo = new StatusRepository();

exports.AddStatus = async function (req, res) {
  try {
    const status = {
      name: req.body.name,
    };
    statusRepo.AddStatusAsync(status).then((result) => {
      res.send({ status: 200, body: { data: result } });
    });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.GetAllStatus = async function (req, res) {
  try {
    const limit = parseInt(req.params.limit) || 10;
    const page = parseInt(req.params.page) || 0;
    statusRepo.GetAllStatusAsync({}, limit, page).then((result) => {
      statusRepo.GetCountAsync({}).then((count) => {
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

exports.GetStatusByID = async function (req, res) {
  try {
    statusRepo.GetStatusByIDAsync(req.params.id).then((result) => {
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

exports.UpdateStatusById = async function (req, res) {
  try {
    statusRepo
      .UpdateStatusAsync({ ...req.body, updatedAt: new Date().valueOf() })
      .then((result) => {
        res.send({ status: 200, body: { data: result } });
      });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.DeleteStatusById = async function (req, res) {
  try {
    statusRepo.DeleteStatusByIdAsync(req.params.id).then((result) => {
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
