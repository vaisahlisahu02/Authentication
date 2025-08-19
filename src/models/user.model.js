const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
username:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
profieImage:{
type:String,
require:true
},
password:{
    type:String,
}
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel