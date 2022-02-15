const express = require("express");
const router = express.Router();
const signUp = require("../Controller/signup")
const {userValidator} = require("../Validator/validator")
const signIn = require("../Controller/signin")
const signOut = require("../Controller/signout")



router.post('/signup' ,  userValidator, signUp);

router.post('/signin' , signIn );

router.get('/signout' , signOut)


module.exports = router;      