const expressJwt = require("express-jwt")

const requireSignIn = expressJwt({
    secret : process.env.JWT,
    algorithms: ["HS256"],
    userProperty : 'auth'
});

const isAuth = (req,res,next)=>{
    
    console.log(req.profile,req.auth)
let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!user){
        return res.status(403).json({
            
            error:"Access denied"
        })
    }
    next()
};

const isAdmin = (req , res , next)=>{
    if(req.profile.role === 0){
        return res.status(403).json({
            error:'Only Admins can access'
        })
    }
    next();
} 

module.exports = requireSignIn; 
module.exports= isAuth;   
module.exports = isAdmin;