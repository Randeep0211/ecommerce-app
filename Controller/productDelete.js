const Product = require("../models/product")


const deleteProduct = (req,res)=>{


    Product.findByIdAndDelete(req.product._id ,(err)=>{
        if(err){
           return res.status(400).json({
                Message:"Product failed to delete"
            })
        }
       
        return res.json({ 
           Message:"Product deleted successfully"
        })


    })
        
        
}


module.exports= deleteProduct