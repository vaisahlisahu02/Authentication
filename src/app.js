// const { error } = require("console");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();


app.set("views", path.join(__dirname, "views")); // __dirname = src
app.set("view engine", "ejs");
app.use(cookieParser());


app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// routes
app.get("/", (req, res) => {
  res.render("index"); 
});

app.get("/login", (req,res)=>{
  res.render("login",{error:""})
})

app.get("/register",(req,res)=>{
  res.render("register",{error:""})
})


const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);

module.exports = app;
