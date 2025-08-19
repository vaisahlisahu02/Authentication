const express = require("express")
const userRoutes = require("../src/routes/user.routes")
const cookieParser = require("cookie-parser")
const app = express()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use("/users",userRoutes)

module.exports = app;