const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


module.exports.registerViewController = (req,res)=>{
    res.render("register")
}

module.exports.registerUserController = async(req,res)=>{
    const {username,email,password,profileImage} = req.body

    const hashpassword = await bcrypt.hash(password,10) 

    const user = await userModel.create({
       username,
       email,
       profileImage,
       password:hashpassword
    })
    const token = jwt.sign({
        id:user._id,
        email:user.email
    },"node-auth-secretKey")

    res.cookie('token',token)
    res.send({     
        message:"user register successfully",
        user,
        token
    })
}

module.exports.profileViewController = (req,res)=>{
    res.render("profile")
}