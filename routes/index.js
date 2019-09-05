/**
 * -----------------------------------------------------------------
 * Node, Express, Mongodb and React js Application
 * -----------------------------------------------------------------
 * NAME : index.js
 * PURPOSE : All the routes,controllers,Middlewares and validators are imported in this file
 */
const router = require('express').Router()

//Controllers
const { login } = require('../controllers/authController')


//Middlewares


//Validators
const {loginValidator} = require('./validator')


router.post('/login',loginValidator,login)


module.exports = router