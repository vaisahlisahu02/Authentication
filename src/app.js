const { error } = require("console");
const express = require("express");
const path = require("path");
const app = express();


app.set("views", path.join(__dirname, "views")); // __dirname = src
app.set("view engine", "ejs");

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

module.exports = app;
