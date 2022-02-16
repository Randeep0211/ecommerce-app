const Category = require('../models/category')


const deleteCategory = (req,res)=>{

    Category.findByIdAndDelete(req.category._id).exec((error,result)=>{
        if(error){
            return res.status(403).res.json({
                error:"Category could not be deleted"
            })
        }

        res.json({
            Message:"Category deleted successfully"
        })
    })
}

module.exports= deleteCategory