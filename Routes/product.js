const express = require('express')
const routes = express.Router()

const createProduct = require('../Controller/product') 
const isAuth = require("../Controller/auth")
const isAdmin = require('../Controller/auth')
const requireSignIn = require('../Controller/auth')
const userId = require('../Controller/user')
const productId = require("../Controller/productMiddleware")
// const read = require("../Controller/productMiddleware")
const deleteProduct = require('../Controller/productDelete')
const updateProduct = require('../Controller/productUpdate')



routes.post('/product/create/:userId' , requireSignIn, isAuth, isAdmin, createProduct)

routes.get('/product/read/:productId' ,(req,res)=>{
    
    res.json({
        product:req.product
    })
})

routes.delete('/product/delete/:productId/:userId' , requireSignIn, isAuth, isAdmin, deleteProduct)

routes.put('/product/update/:productId/:userId' , requireSignIn, isAuth, isAdmin, updateProduct)



routes.param('userId' , userId)
routes.param('productId', productId)

module.exports = routes