
const signOut = (req,res)=>{

        res.clearCookie('t');
        res.json({message:"You have been logged out"})
    }


 module.exports = signOut