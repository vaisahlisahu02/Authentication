const express = require ("express")
const router = express.Router()
const userController = require("../controller/user.controller")
const jwt = require("jsonwebtoken")

/* /users/register [get]*/
router.get("/register",userController.registerViewController)

router.post("/register", userController.registerUserController);

router.get('/profile',(req,res)=>{
    try{
 const token = req.cookies.token
    jwt.verify(token,"node-auth-secretKey")
    next()
    }catch(err){
        res.send("unauthorized")
    }
   
},userController.profileViewController)


module.exports = router;