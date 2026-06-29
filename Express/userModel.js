const mongoose=require('mongoose')
mongoose.connect(`mongodb://localhost:27017/practiceDB`)
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:Number
})
module.exports=mongoose.model("user",userSchema)
