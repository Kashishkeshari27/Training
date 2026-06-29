import React, { useContext, useRef, useState } from 'react'
import { ThemeContext } from '../Context/Theme'

const UseeTimer = () => {
  const{toggleTheme,theme }=useContext(ThemeContext)
    const[second,setSecond]=useState(0)
    const timref=useRef(null)
    const start=()=>{
        timref.current=setInterval(() => {
            setSecond((second)=>second+1)
        }, 1000);
    }
    const stop=()=>{
        clearInterval(timref.current)              
    }
    const reset=()=>{
        clearInterval(timref.current)
        setSecond(0)
    }
  return (
    <div style={{background:theme==="light"?"white":"black", color:theme==="light"?"black":"white"}}>
      <button onClick={toggleTheme}>Theme</button>
      <h1>Timer : {second}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseeTimer
