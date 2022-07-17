
require('dotenv').config()  //configuration
const mongoose = require('mongoose')

console.log("mongo_uri: ", process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



// added from internet to find errors
const db3 = mongoose.connection;
db3.on("error", console.error.bind(console, "connection error: "));
db3.once("open", function () {
    console.log("Connected successfully");
});
//**************************************************








module.exports.Junk = require('./junks')
module.exports.User = require('./users')
