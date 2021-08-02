//Load HTTP module
require("dotenv").config({ path: __dirname + "/.env" });
var express = require("express");
var config = require("./common/config");
var app = express();
var hostName = process.env.HOSTNAME || config.server.hostName;
var port = process.env.PORT || config.server.port;
var indexRouter = require("./routes/index");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// maybe delete it when host to internet
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", indexRouter);


//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
