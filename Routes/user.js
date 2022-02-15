const express = require("express")
const router = express.Router()
const userId = require('../Controller/user')
const isAuth = require("../Controller/auth")
const isAdmin = require('../Controller/auth')
const requireSignIn = require('../Controller/auth')


router.get('/secret/:userId', requireSignIn , isAuth, isAdmin , (req,res)=>{
    res.json({
        user: req.profile
    })
})

router.param('userId' , userId)


module.exports = router;      