const mongoose = require("mongoose")


function connect(){
    mongoose.connect("mongodb://localhost:27017/node-auth")
    .then(()=>{
        console.log("db connected sucessfully")
    }).catch((err)=>{
        console.log("Error Occured",err)
    })
}

module.exports = connect