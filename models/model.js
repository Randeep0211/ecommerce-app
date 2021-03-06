const mongoose = require("mongoose")
const crypto = require("crypto")
const { v1 :uuidv1 }= require("uuid")
const  timeStamp  = require("console")


const userSchema = new mongoose.Schema({

    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },

    hashed_password:{
        type:String,
        required: true
    },

    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    about:{
        type: String,
        trim: true,
    },

    salt: String,

    role:{
        type:Number,
        default:0
    },

    history:{
        type:Array,
        default:[]
    }


},{timeStamp:true})

userSchema.virtual('password').set(function(password){
    this._password = password
    this.salt = uuidv1()
    this.hashed_password = this.encryptPassword(password)

}).get(function(){
    return this._password
})



userSchema.methods = {
    // below function will get the plain password 

    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function (password) { 
        if (!password)
            return "";
        return crypto.createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
    }
}
 



module.exports = mongoose.model("User" , userSchema)


