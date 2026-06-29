// const verify=(req,res,next)=>{
// const token=req.header.token || req.query.token
// if(!token){
//     return res.status(401).json("Unauthorised")
// }    
// if(token!=="12345"){
//     return res.ststus(404).json("Wrong info.")
// }
// next()
// }

const jwt=require('jsonwebtoken')
const verifyToken=(req,res,next)=>{
    const authheader=req.headers.authorization||req.headers.Authorization
    if(!authheader){
        return res.status(401).json("Unauthorized")
    }
    const token=authheader.split(" ")[1]
    if(!token){
        return res.status(400).json("Invalid Token")
    }
    try{
        const payload=jwt.verify(token,"kashishkeshari")
        req.user=payload
        next()

    }
    catch(error){
        res.status(400).json("Wrong Token")
    }
}

module.exports={verifyToken}