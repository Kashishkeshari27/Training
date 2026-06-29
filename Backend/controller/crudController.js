const kashish=require('../models/userModel')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
try{
    const details=await kashish.create(req.body)
    res.status(201).json({message:"Data saved suceesfully",details})
}
catch(error){
    res.status(400).json(error)
}
}

const getStudent= async(req,res)=>{
    try{
        const getData=await kashish.find({})
        res.status(200).json({message:"Data fetch successfully",getData})
    }
    catch{
        res.status(400).json(error)
    }
}

const getStudentById= async(req,res)=>{
    try{
        const student=await kashish.findById(req.params.studentId)
        res.status(200).json({message:"Data fetch successfully",student})
    }
    catch{
        res.status(400).json(error)
    }
}
const updateStudent=async(req,res)=>{
    try{
        const student=await kashish.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(student)
    }
    catch{
        res.status(400).json(error)
    }
}

const deleteStudent=async(req,res)=>{
    try{
        const student=await kashish.findByIdAndDelete(req.params.id)
        res.status(200).json("student deleted sucessufully")
    }
    catch{
        res.status(400).json(error)
    }
}
const login=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({message:"Email and Password are required"});
    }
    const existStudent=await kashish.findOne({email})
       if(!existStudent){
                return res.status(400).json("Credentials not found Please register")
            }
            try{
                const loginData=await kashish.findOne({email,password})
                const token=jwt.sign({email:loginData.email, _id:loginData._id},"kashishkeshari",{expiresIn:'10m'})
        
            if(loginData.role==="Teacher"){
                return res.status(200).json({message:"Welcome Teacher",loginData,token})
            }
            if(loginData.role==="Management"){
                return res.status(200).json({message:"management",loginData,token})
            }
            else{
                res.status(200).json({message:"Succesfully Login",existStudent,token});
            }
    }
    catch(error){
        res.status(400).json(error)
        // console.log(error)
    }
}

const uploadFile=async(req,res)=>{
    try{
        res.status(200).json({message:"file uploaded",file:req.file})
    }
    catch(error){
        res.status(400).json(error)
    }
}
module.exports={getStudent,getStudentById,updateStudent,deleteStudent,login,register,uploadFile}