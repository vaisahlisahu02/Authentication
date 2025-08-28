const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const jwt = require("jsonwebtoken");


router.get("/register", userController.registerViewController);


router.post("/register", userController.registerUserController);


router.get("/login", userController.loginUserController);
router.post("/login",userController.loginUserController)

router.get('/profile', (req,res,next) => {  
    try{
        const token = req.cookies.token;
        if(!token) return res.redirect("/users/login");
        jwt.verify(token,"node-auth-secretKey");
        next(); 
    }catch(err){
        res.redirect("/users/login").send({message:"registerd sucessfully"}); 
    }
}, userController.profileViewController);

module.exports = router;
