const express = require('express')
const routes = express.Router()

const createProduct = require('../Controller/product') 
const isAuth = require("../Controller/auth")
const isAdmin = require('../Controller/auth')
const requireSignIn = require('../Controller/auth')
const userId = require('../Controller/user')

routes.post('/product/create/:userId' , requireSignIn, isAuth, isAdmin, createProduct)


routes.param('userId' , userId)

module.exports = routes