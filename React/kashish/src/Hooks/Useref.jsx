import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    const inputRef=useRef(null)
    const scrollTo=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const Scroll=()=>{
        scrollTo.current.scrollIntoView({behaviour:"smooth"})
    }
    return (
  
    <div>
      <p>This is the example</p>
      <input type="text" ref={inputRef} className='m1-15' id='' placeholder='enter name'/>
      <button onClick={Scroll} className='border-2 ml-50'>Contact us</button>
      <p className='mt-500' ref={scrollTo}>This is my contact</p>
    </div>
  )
}

export default Useref
