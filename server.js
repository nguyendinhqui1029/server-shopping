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

app.get('', function (req, res) {
    res.sendFile('views/index.html', { root: __dirname })
})
app.listen(port, () => {
    console.log("start servers")
})
