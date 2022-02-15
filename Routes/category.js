const express = require('express')
const routes = express.Router()

const createCategory = require('../Controller/category')
const isAuth = require("../Controller/auth")
const isAdmin = require('../Controller/auth')
const requireSignIn = require('../Controller/auth')
const userId = require('../Controller/user')
const {categoryId , read } = require("../Controller/categoryRead")
const updateCategory = require("../Controller/categoryUpdate")

routes.param('categoryId' , categoryId)
routes.param('userId' , userId)

routes.post('/category/create/:userId' , requireSignIn, isAuth, isAdmin, createCategory)


routes.get('/category/read/:categoryId' , read )

routes.put('/category/update/:categoryId/:userId' , requireSignIn , isAuth , isAdmin ,  updateCategory)






module.exports = routes