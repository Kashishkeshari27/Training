const express=require('express')
const mongoose=require('mongoose')
const routes=require('../routes/crud')
const app=express()
app.use(express.json())
const {verifyToken}=require('../Middleware/middleware')
const cors=require('cors')
app.cors(express)


mongoose.connect('mongodb://localhost:27017/kashish')
 .then(()=>console.log("Database is connected"))
 .catch((err)=>console.log(error))
app.use("/api",routes)
app.get((req,res)=>{
    res.send("Server Is Running")
})
app.listen(4500,()=>{
    console.log("server start");
    console.log(routes)
});







// const fs=require('fs')
// const {verify}=require('./middleware')

// app.get("/profile",verify,(req,res)=>{
//     try{
//         const data="My Bank Detail"
//         res.status(200).json(data)
//     }
//     catch(error){
//         res.status(400).json(eror)
//     }
// })
// app.get("/kashish",(req,res)=>{
// fs.readFile('backend.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         res.send(data)
//     }
// })
// })
// app.get("/student/:studentid",(req,res)=>{
//     res.send(`Students id: ${req.params.studentid}`)
// })

// app.get("/",(req,res)=>{
//     res.send("Request Accepted");
// });




