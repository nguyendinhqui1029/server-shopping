"use strict";
var jsonwebtoken = require("jsonwebtoken"),
  config = require("../common/config"),
  errors = require("../common/errorMessage"),
  RolesRepository = require("../repositories/rolesRepository"),
  rolesRepo = new RolesRepository();

exports.AddRoles = async function (req, res) {
  try {
    const role = {
      alias: req.body.alias,
      name: req.body.name,
      description: req.body.description,
    };

    rolesRepo.AddRolesAsync(role).then((result) => {
      res.send({ status: 200, body: { data: result } });
    });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.GetAllRoles = async function (req, res) {
  try {
    const limit = parseInt(req.params.limit) || 10;
    const page = parseInt(req.params.page) || 0;
    rolesRepo.GetAllRolesAsync({}, limit, page).then((result) => {
      rolesRepo.GetCountAsync({}).then((count) => {
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

exports.GetRolesByID = async function (req, res) {
  try {
    rolesRepo.GetRolesByIDAsync(req.params.id).then((result) => {
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

exports.UpdateRolesById = async function (req, res) {
  try {
    rolesRepo
      .UpdateRolesAsync({ ...req.body, updatedAt: new Date().valueOf() })
      .then((result) => {
        res.send({ status: 200, body: { data: result } });
      });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.DeleteRolesById = async function (req, res) {
  try {
    rolesRepo.DeleteRoleByIdAsync(req.params.id).then((result) => {
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
