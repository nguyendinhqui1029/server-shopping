"use strict";
const mongoose = require("mongoose");
const pwd = encodeURIComponent(process.env.DB_PWD);
const url =
  process.env.DB_PRECONNECTSTRING + pwd + process.env.DB_SUFCONNECTSTRING;
const dbName = process.env.DB_NAME;

class DBAccess {
  client = null;
  constructor() {}

  connectDB() {
    try {
      if (!this.client) {
        this.client = mongoose.createConnection(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        });
      }
      return this.client;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = DBAccess;
