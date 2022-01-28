const Product = require('../models/product')
const formidable = require('formidable')
const fs = require('fs')
const path = require('path')
// const _= require('lodash')


const createProduct = (req,res)=>{

    const form = new formidable.IncomingForm()
    form.keepExtentions = true


    form.parse(req , (error , fields , files )=>{



        if(error){
            res.status(400).json({
                error: "Image could not be uploaded"
            })
        }

        let product = new Product(fields)

        if(files.photo){
            console.log(files.photo)
            product.photo.data = fs.readFileSync(files.photo.filepath)
            product.photo.contentType = files.photo.type
        }

        product.save((error , result)=>{
            if(error){
               return res.status(400).json({
                    error:"product not found. Please add one"
                })
            }
            res.json(result)
        })
        
    })
}

module.exports = createProduct