console.log("crud.js loaded")
const express=require("express");
const routes=express.Router()
const {upload}=require('../files/files')

// const routes=require('Routes')
// const {upload}=require('../files/files')
// const {verifyToken}=require('../Middleware/middleware')
// const {getStudent,getStudentById,updateStudent,deleteStudent,login,register,uploadFile}=require('../controller/crudController')

routes.post("/register",register)
routes.get("/getDetails",verifyToken,getStudent)
routes.get("/getDetails/:studentId",getStudentById)
routes.put("/updateDetails/:id",updateStudent)
routes.delete("/deleteDetails/:id",deleteStudent)
routes.post("/login",login)
routes.post("/upload",upload.single("image"),uploadFile)
routes.get("/test",(req,res)=>{
    resizeBy.send("Routes is working")
})
module.exports=routes