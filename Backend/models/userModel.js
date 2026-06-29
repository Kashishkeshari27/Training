const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:String,
    email:{
        type: String,
        required:true
    },
    role:{
        type:String,
        enum:["Student","Teacher","Management"],
        default:"Student"
    },
    password:String,
    
})
module.exports=mongoose.model("Students",studentSchema)