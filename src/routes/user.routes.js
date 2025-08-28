const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const jwt = require("jsonwebtoken");


router.get("/register", userController.registerViewController);


router.post("/register", userController.registerUserController);


router.get("/login", userController.loginUserController);
router.post("/login",userController.loginUserController)

router.get('/profile', (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.redirect("/users/login");

        const decoded = jwt.verify(token,"node-auth-secretKey");
        req.user = decoded; // username/email agar token me ho to
        next(); 
    } catch(err){
        return res.redirect("/users/login");
    }
}, (req, res) => {
    const message = req.query.message; // message query string se
    res.render("profile", { message, user: req.user }); // pass message to ejs
});

module.exports = router;
