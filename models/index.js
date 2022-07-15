
require('dotenv').config()  //configuration
const mongoose = require('mongoose')

console.log("mongo_uri: ", process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



// added from internet to find errors
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
//**************************************************








module.exports.Junk = require('./junks')

