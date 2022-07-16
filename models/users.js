

const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    
    passwordDigest: String


})

const User = mongoose.model('User', userSchema)
module.exports = User



