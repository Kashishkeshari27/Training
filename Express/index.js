const express=require('express')
const app=express()

const userModel=require("./userModel")

app.get('/',(req,res)=>{
    res.send("Hello Kashish")
})

app.get(()=>{
    let 
})
app.get("/register",(req,res)=>{
    res.send("Get method")
})
app.post("/upload",(req,res)=>{
    res.send("post method")
})

app.listen(7000,()=>{
    console.log("Server Started.")
})