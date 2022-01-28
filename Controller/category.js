const Category = require('../models/category')

const createCategory = (req,res)=>{

    const category = new Category(req.body)

    category.save((error , category)=>{
        if(error){
           return res.status(400).json({
                error:'error'
            })
        }

        res.json({
            category
        })
    })
}

module.exports = createCategory