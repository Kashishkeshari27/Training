import React, { useState } from 'react'

const UseStates = () => {
    const[count,setCount]=useState(0)
    const[quantity,setQuantity]=useState(1)
    const inc=()=>{
        setCount((count)=>count+1)
    }
    const dec=()=>{
        setCount((count)=>count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    const price=200
    const total=quantity*price
    const proQua=()=>{
        setQuantity((quantity)=>quantity+1)
    }
    const reset1=()=>{
        setQuantity(1)
    }
  return (
<div>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
        <button onClick={reset}>Reset</button>
        <h1>Count:{count}</h1>

        <button onClick={proQua}>Product</button>
        <button onClick={reset1}>Reset</button>
        <p>{quantity}</p>
        <h1>Total:{total}</h1>
    </div>
  )
}

export default UseStates
