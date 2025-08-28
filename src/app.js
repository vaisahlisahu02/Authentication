const express = require("express");
const path = require("path");
const app = express();


app.set("views", path.join(__dirname, "views")); // __dirname = src
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("index"); 
});

module.exports = app;
