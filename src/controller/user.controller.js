const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.registerViewController = (req, res) => {
    res.render("register");
};


module.exports.registerUserController = async (req, res) => {
    try {
        const { username, email, password, profileImage } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).render("register", { error: "Email already registered!" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            profileImage,
            password: hashPassword
        });

        const token = jwt.sign({ id: user._id, email: user.email }, "node-auth-secretKey");

        res.cookie("token", token, { httpOnly: true });

        res.redirect("/users/profile");
    } catch (err) {
        console.error(err);
        res.status(500).render("register", { error: "Something went wrong!" });
    }
};


module.exports.profileViewController = (req, res) => {
    res.render("profile");
};


module.exports.loginUserController = (req, res) => {
    res.render("login");
};

// controller/user.controller.js

module.exports.loginUserPostController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).render("login", { error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).render("login", { error: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, "node-auth-secretKey");
        res.cookie("token", token, { httpOnly: true });
        res.redirect("/users/profile").send({message:"login successfully"})
      

    } catch (err) {
        console.error(err);
        res.status(500).render("login", { error: "Something went wrong!" });
    }
};

