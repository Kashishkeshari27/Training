import React, { useState }  from 'react'

const Form = () => {
    const[name,setname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[data,setData]=useState({})
    const handleClick=(e)=>{
        e.preventDefault()
        setname("")
        setEmail("")
        setPassword("")

        const data={
            name,email,password
        }
        localStorage.setItem("data",JSON.stringify(data))
    }
    const getData=()=>{
      const user=localStorage.getItem("data")
      setData(JSON.parse(user))
    }
  return (
    <div> 
      <h1>Sign Up Form</h1>
      <form action="" onSubmit={handleClick}>
        <label >Name: </label>
        <input type="text" name="" id="" value={name} onChange={(e)=>setname(e.target.value)}/><br></br><br></br>
        <label htmlFor="">Email: </label>
         <input type="text" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
        <label htmlFor="">Password: </label>
         <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br><br></br>
         <button type="submit">Submit</button>
          <button onClick={getData}>Get info.: </button>
          <p>{data.name}</p>
          <p>{data.email}</p>
      </form>

    </div>
  )
}

export default Form
