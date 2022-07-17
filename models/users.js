

const mongoose = require('mongoose')

// creating shorthand for the Schema constructor 
const { Schema } = mongoose 



const userSchema = new Schema({

    firstName: {
        type: String,
        required: false
    },
    lastName: { type: String },
    email: { type: String },
    passwordDigest: { type: String }
   

})

const User = mongoose.model('User', userSchema)
module.exports = User



