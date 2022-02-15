const Category = require('../models/category')

const categoryId = (req,res,next,id)=>{

    console.log(id , "id")
    Category.findById(id ,   (error,category)=>{
        console.log(error,category)
        if(error || !category){
			res.status(400).json({
				error: "Category not found"
		})
		}

       req.category=category
       next()

    })
}


const read = (req,res)=>{
    return res.json(req.category)
}

module.exports= {categoryId , read}
