const mail=require('nodemailer');
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kashishkeshari24@gmail.com',
        pass:'odal inxk rmau zelr'
    }
    })
    transporter.sendMail({
        from:'kashishkeshari24@gmail.com',
        to:'shreyagupt666@gmail.com',
        subject:'hello,mus-can',
        text:'helloo,how are you?'
},(err,data)=>{
    if(err){
        console.log(err)
    } else {
        console.log('Email sent successfully!')
    }
})