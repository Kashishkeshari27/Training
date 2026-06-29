const multer=require('multer')
const cloudinary=require('cloudinary')
const 
const path=require('path')
// const storage=multer.diskStorage({
//     destination:{
//         files=(req,file,cb)=>{
//             cb(null,'/uploads/')
//         }
//     },
//     filename:(req,file,cb)=>{
//         cb(null,DataTransfer.now()+"-"+file.originalname)
//     }
// })

cloudinary.config({
    cloud_name:"dvubxtnju",
    api_key:"699952916215688",
    api_secret:"-ZpXmeysNelnUfghgAyde9hYeMI"
})
const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"uploads",
        resoure_type:"raw",
        allowed_formats:["pdf"]
    }
})
const upload=multer({storage})
module.exports={storage}