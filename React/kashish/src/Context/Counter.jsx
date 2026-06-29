import { createContext, useState } from "react";
export const CounterContext=createContext()
export const CounterProvider=({children})=>{
    const[count,setCount]=useState([])
    const addToCart=()=>{
        
    }
    return(
        <CounterContext.Provider value={{count,inc}}>
            {children}
        </CounterContext.Provider>
    )
}
