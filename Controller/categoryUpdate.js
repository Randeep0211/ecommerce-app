const Category = require('../models/category')

const updateCategory = (req , res)=>{

   
    Category.findByIdAndUpdate(req.category._id , (error , category)=>{
        if(error){
            return res.status(403).json({
                error: "Category could not be updated"
            })
        }

        res.json(
            category
        )
    })
}

module.exports = updateCategory