
import React, {useState} from 'react'

const Password = () => {
    const[showPassword,setShowPassword]=useState(false)
    const[inputpassword,setInputpassword]=useState("")
    const[like,setLike]=useState(false)
    const likes=()=>{
        setLike(!Like)
    }
  return (
    <div>
      <input type={showPassword?"text":"password"} name="" id="" value= {inputpassword} onChange={(e)=>setInputpassword(e.target.value)}/>
      <button onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?"Hide":"Show"}</button>
      <button onClick={likes}>like button</button>
      <button ></button>
    </div>
  )
}

export default Password
