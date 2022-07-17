
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
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    

    //let { password, ...rest } = req.body
    //let userObject = {}
    //console.log("password: ", password)
    //console.log("...rest: ", rest)
    // then we need to create in db mongo a collection of data with both password and the rest
    // of the req.body or ...rest, I guess.
    // how to add both in mongoose to collection is the problem

    let passwordDigest = await bcrypt.hash(password, 10)


    const objectUser = new Object({
        firstName,
        lastName,
        email,
        passwordDigest
    })


    console.log(req.body)
    console.log("hash:  " + passwordDigest)
    db2.User.create(objectUser)
        .then((user) => {
            
            console.log(user)
            return res.json(user)

        })
        .catch(err => {
            cosole.log("err",error)
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


router.get('/:id', (req, res) => {

    db2.User.findById(req.params.id)
        .then(junkk => res.json(junkk))
        .catch(err => res.status(400).json("Error: " + err))
})

router.put('/:id/update', (req, res) => {

    let updates = req.body //we set a variable equal to the entire req.body
    db2.User.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
        .then(updatedJunk => res.json(updatedJunk))
        .catch(err => res.status(400).json("Error: " + err))
    
})



router.delete('/:id', (req, res) => {
    db2.User.findByIdAndDelete(req.params.id)
        .then(() => res.json("Junk deleted =("))
        .catch(err => res.status(400).json("Error: " + err))
})






module.exports = router
