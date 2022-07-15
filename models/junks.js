
const mongoose = require('mongoose')



const junkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    pic: { type: String, default: 'http://placekitten.com/350/350' },
    price: { type: Number, default: 0 },
    receipt: { type: String, default: "none" },
    datepurchased: { type: String, default: '0 bc' }
    
    
})


module.exports = mongoose.model('Junk', junkSchema)