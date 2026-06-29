const express=require('express')
const app=express()

app.get("/kashish",(req,res)=>{
    console.log("hello kashish")
    res.send("hello kashish")
})
app.listen(9000,()=>{
    console.log("Server started")
})