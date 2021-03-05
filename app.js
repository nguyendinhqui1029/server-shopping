const mongoose = require("mongodb");

const MongoClient = mongoose.MongoClient;
const uri = "mongodb+srv://quinguyen:SVVQAO53kG7ZpjFO@cluster0.6uvbx.mongodb.net/personalweb?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const userCollection = client.db("personalweb").collection("user");
//     const item = userCollection.find({ userName: "qnguyen1997" }, { userName: 0, name: 1 }).toArray().then(items => {
//         console.log('All items', items);
//         client.close();
//     })
// });
let mongodb;

function connect(callback) {
  mongoClient.connect(uri, (err, db) => {
    mongodb = db;
    callback();
  });
}
function get() {
  return mongodb;
}

function close() {
  mongodb.close();
}

module.exports = {
  connect,
  get,
  close
};
