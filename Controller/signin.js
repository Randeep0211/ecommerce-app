const User = require("../models/model")
const jwt = require("jsonwebtoken")



const signIn = (req,res)=>{
    const {email , password} = req.body;

   


    User.findOne({email} , (err , user)=>{


         
        if(err || !user){
            return res.status(400).json({
                err: 'User does not exist.Please sign up'
            })
        }

        if(!user.authenticate(password)){
            return res.status(401).json({
                error : 'Email and password is missing'
            })
        } 

        const token = jwt.sign({_id: user._id} , process.env.JWT)
        res.cookie('t',token, {expire: new Date() + 9999})

        const{_id , name ,email , role} = user;
        return res.json({token , user:{_id , name, email , role}})

    
})
}

module.exports =  signIn;