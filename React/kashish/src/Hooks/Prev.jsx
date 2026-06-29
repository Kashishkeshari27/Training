import React, { useContext, useEffect, useRef, useState } from 'react'
import { CounterContext } from '../Context/Counter'
const Prev = () => {
  const[count,inc]=useContext(CounterContext)
    const[count,setCount]=useState(0)
    const pervCount=useRef()
    console.log(pervCount)
    useEffect(()=>{
        pervCount.current=count

    },[count])
  return (
    <div>
      <h1>It store Count and Prevcount</h1>
      <p>Count: {count}</p>
    <p>pervCount: {pervCount.current}</p>
    <button onClick={()=>setCount((count)=>count+1)}>inc</button>
    <button onClick={()=>setCount((count)=>count-1)}>dec</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Prev
