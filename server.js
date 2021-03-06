const express = require("express");
const app = express();
const path = require('path');
const morgan = require("morgan");
const bodyparser = require("body-parser");
app.use("/public", express.static(path.join(__dirname, 'public')));
// const ConnectMongoDB = require('./app');
// ConnectMongoDB.connect(function (err) {
//     db.collection("user").find({ userName: "qnguyen1997" }, { userName: 0, name: 1 })
//         .toArray().
//         then(items => {
//             console.log('All items', items);
//             connection.close();
//         });

const port = process.env.PORT || 3000;
const testModel = require("./models/test")
app.get("/name/:name", function (req, res) {
    const mongoose = require("mongodb");
    const MongoClient = mongoose.MongoClient;
    const uri = "mongodb+srv://quinguyen:SVVQAO53kG7ZpjFO@cluster0.6uvbx.mongodb.net/personalweb?retryWrites=true&w=majority";
    const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoClient.connect(err => {
        mongoClient.db("personalweb").collection("test").insertOne({ name: req.params.name }).then(() => {
            mongoClient.close();
        });
    });
    res.send({ status: true })
})
app.get('', function (req, res) {
    res.sendFile('views/index.html', { root: __dirname })
})
app.get("/getnhac", (req, res) => {
    res.sendFile('public/upload/nhac.mp3', { root: __dirname })
})
app.listen(port, () => {
    console.log("start servers")
})
