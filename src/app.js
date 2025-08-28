const express = require("express");
const path = require('path');
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");

const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); // fixed

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/users", userRoutes);


app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;
