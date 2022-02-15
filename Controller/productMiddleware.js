const Product = require("../models/product")


const productId = (req,res,next,id)=>{

	Product.findById(id).exec((error,product)=>{
		if(error || !product){
			res.status(400).json({
				error: "Product not found"
		})
		}
       
		req.product=product;
        
		next();
	})
} 

// const read = (req,res)=>{
// 	req.product.photo = ''
// res.json(req.product)
// }



module.exports = productId
// module.exports = read

