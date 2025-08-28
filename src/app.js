const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/users", userRoutes);

module.exports = app;
