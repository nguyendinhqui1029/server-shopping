const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");

const ConnectMongoDB = require('./app');
ConnectMongoDB.connect(function (err) {
    db.collection("user").find({ userName: "qnguyen1997" }, { userName: 0, name: 1 })
        .toArray().
        then(items => {
            console.log('All items', items);
            connection.close();
        });
});
