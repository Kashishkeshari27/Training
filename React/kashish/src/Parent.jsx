import React from 'react'
import Child from './Child'
const Parent = () => {
    const mobile={
        name:"one_pluse",
        price:27000,
        storage:"264GB"
    }
  return (
 
    <div>
      <Child phone={mobile}/>
    </div>
  )
}
export default Parent
