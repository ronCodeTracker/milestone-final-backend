
const router = require('express').Router()
const bodyParser = require('body-parser')
const { request } = require('express')
const db2 = require("../models")

//import User from '../models/users'

const bcrypt = require('bcrypt')



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}

))

//const passwordDigestOne = new User({
//    passwordDigest: "xxxxxx"
//})

//await passwordDigestOne.save()

router.post('/', async (req, res) => {
    // using mongoDB(mongoose)  the spread operator is confusing me for one
    // then it looks like we need to seperate the req.body into password and the rest
    
    let { password } = req.body
    console.log("password: ", password)
    //console.log("...rest: ", rest)
    // then we need to create in db mongo a collection of data with both password and the rest
    // of the req.body or ...rest, I guess.
    // how to add both in mongoose to collection is the problem

    let passwordD = await bcrypt.hash(password, 10)
    console.log("passwordD: ", passwordD)
    db2.User.create( { passwordDigest: "passwordD" })
        .then((user) => {
            res.json(user)
        })
})


router.get('/', (req, res) => {

    //await passwordDigestOne.save()

    db2.User.find()
        .then((user) => {
            res.json(user)
        })

    //res.send('Users')
})


// using postgress database
//router.post('/', async (req, res) => {
//    let { password, ...rest } = req.body;
//    const user = await User.create({
//        ...rest,
//        passwordDigest: await bcrypt.hash(password, 10)
//    })
//    res.json(user)
//})



module.exports = router
