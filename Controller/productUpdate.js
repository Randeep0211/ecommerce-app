const Product = require("../models/product")
const formidable = require('formidable')
const fs = require('fs')
const _= require('lodash')


const updateProduct = (req,res,id)=>{
    const form = new formidable.IncomingForm()
    form.keepExtentions = true

    form.parse(req,(error,fields, files)=>{
        if(error){
            res.status(400).json({
                error: "Image could not be uploaded"
            })
        }

        const {name , description , price , category , shipping , quantity} = fields
					if(!name || !description || !price || !category || !shipping || !quantity){
						res.status(400).json({
							error: "All Fields are required"
					})
					}
                   
                   let payload = _.extend(fields,files)

                

                    if(files.photo){
                        if(files.photo.size > 1000000){
                                        return res.status(400).json({
                                            error:"Image size must not be more than 1MB"
                                    })
                                    }
                        product.photo.data = fs.readFileSync(files.photo.filepath)
                        product.photo.contentType = files.photo.type
                    }

                    Product.findByIdAndUpdate(req.product._id , payload ,(error ,result)=>{
                        if(error){
                           return res.status(400).json({
                                error:"product not found. Please add one"
                            })
                        }
                        return res.json(result)
                    })

    })
}
				
module.exports = updateProduct