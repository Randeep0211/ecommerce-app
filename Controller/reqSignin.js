const expressJwt = require("express-jwt")

const requireSignIn = expressJwt({
    secret : process.env.JWT,
    algorithms: ["HS256"],
    property : 'auth'
})


const isAuth = (req,res,next)=>{
    
    console.log(req.profile,req.auth)
let user = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!user){
        return res.status(403).json({
            
            error:"Access denied"
        })
    }
    next()
};



module.exports= isAuth;  
module.exports = requireSignIn 