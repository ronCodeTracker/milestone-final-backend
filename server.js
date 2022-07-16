// junk app api

require('dotenv').config()  //configuration
//import dotenv from 'dotenv'
//const { request } = require('express');
// include express

const express = require("express")
//import express from 'express'

const app = express();// put express in a variable call 'app'

const PORT = process.env.PORT// env file assign

// ?
const methodOverride = require('method-override')
//import methodOverride from 'method-override'

const cookieSession = require('cookie-session')
//import cookieSession from 'cookie-session'
// MIDDLEWARE
//app.set('views', __dirname + '/views')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


//Middleware
app.use(express.urlencoded({ extended: true }))

// Middleware
app.use(methodOverride('_method'))

// junk
app.use('/junk', require('./controllers/junk'))

//users
app.use('/users', require('./controllers/users'))

//app.use(express.json())
/*************************************************** */





//routes

//home page
app.get('/', (req, res) => {
    res.send('Home')
})






//listen
app.listen(PORT, () => {
    console.log('nomming at port ' + PORT)
})
