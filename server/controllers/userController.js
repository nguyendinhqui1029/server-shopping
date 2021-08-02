"use strict";
var jwt = require("jsonwebtoken"),
  jsonwebtoken = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  config = require("../common/config"),
  errors = require("../common/errorMessage"),
  Helpers = require("../common/helpers"),
  UserRepository = require("../repositories/userRepository"),
  userRepo = new UserRepository();

exports.AddUser = async function (req, res) {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, config.SALT_OR_ROUNDS),
    avatar: req.body.avatar,
    name: req.body.name,
    idRole: req.body.idRole,
    phone: req.body.phone,
    idType: req.body.idType,
  };
  const userExist = await userRepo.GetAllAsync({ email: req.body.email });
  if (userExist && userExist.length) {
    res.send({ status: "CIWCA13005", body: { error: "User email exists" } });
  } else {
    userRepo
      .AddUser(user)
      .then((result) => {
        res.send({ status: 200, body: { data: result } });
      })
      .catch((error) => {
        res.send({ status: 400, body: error });
      });
  }
};
exports.getAllUser = async function (req, res) {
  const limit = parseInt(req.params.limit) || 10;
  const page = parseInt(req.params.page) || 0;
  userRepo.GetAllAsync({}, limit, page).then((result) => {
    userRepo.GetCountAsync({}).then((count) => {
      res.send({
        staus: 200,
        data: {
          body: result,
          pagination: {
            limit: limit,
            page: page,
            totalRow: count,
          },
        },
      });
    });
  });
};

exports.SignIn = async function (req, res) {
  let user = await userRepo.GetUserByEmail(req.body.email);
  if (user === null || user === undefined) {
    res.end(errors.userNotFound);
    return false;
  } else {
    if (!Helpers.comparePassword(req.body.password, user.password)) {
      res.json({ message: errors.pwdIncorrect });
    } else {
      var exp = new Date();
      return res.json({
        token: jwt.sign(
          {
            email: user.email,
            name: user.name,
            _id: user._id,
            exp: exp.setMinutes(exp.getMinutes() + config.jwtToken.expires),
          },
          config.jwtToken.secret
        ),
      });
    }
  }
};

exports.UpdateUser = async function (req, res) {
  if (req.body.hasOwnProperty("password")) {
    req.body.password = bcrypt.hashSync(
      req.body.password,
      config.SALT_OR_ROUNDS
    );
  }
  userRepo
    .UpdateUserAsync({...req.body, updatedAt: new Date().valueOf() })
    .then((result) => {
      res.send({ status: 200, body: { data: result } });
    })
    .catch((error) => {
      res.send({ status: 400, body: error });
    });
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
