"use strict";
var jsonwebtoken = require("jsonwebtoken"),
  config = require("../common/config"),
  errors = require("../common/errorMessage"),
  AddressRepository = require("../repositories/addressRepository"),
  addressRepo = new AddressRepository();

exports.AddAddress = async function (req, res) {
  try {
    const address = {
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      district: req.body.district,
      description: req.body.description,
      type: req.body.type,
    };
    addressRepo.AddAddressAsync(address).then((result) => {
      res.send({ status: 200, body: { data: result } });
    });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.GetAllAddress = async function (req, res) {
  try {
    const limit = parseInt(req.params.limit) || 10;
    const page = parseInt(req.params.page) || 0;
    addressRepo.GetAllAddressAsync({}, limit, page).then((result) => {
      addressRepo.GetCountAsync({}).then((count) => {
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

exports.GetAddressByID = async function (req, res) {
  try {
    addressRepo.GetAddressByIDAsync(req.params.id).then((result) => {
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

exports.UpdateAddressById = async function (req, res) {
  try {
    addressRepo
      .UpdateAddressAsync({ ...req.body, updatedAt: new Date().valueOf() })
      .then((result) => {
        res.send({ status: 200, body: { data: result } });
      });
  } catch (error) {
    res.send({ status: 400, body: error });
  }
};

exports.DeleteAddressById = async function (req, res) {
  try {
    addressRepo.DeleteAddressByIdAsync(req.params.id).then((result) => {
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
