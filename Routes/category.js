const express = require('express')
const routes = express.Router()

const createCategory = require('../Controller/category')
const isAuth = require("../Controller/auth")
const isAdmin = require('../Controller/auth')
const requireSignIn = require('../Controller/auth')
const userId = require('../Controller/user')

routes.post('/category/create/:userId' , requireSignIn, isAuth, isAdmin, createCategory)


routes.param('userId' , userId)

module.exports = routes