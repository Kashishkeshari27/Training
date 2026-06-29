import React from 'react'
import Childcomponent from './Childcomponent'
const Parentcomponent = () => {
//     const kashish={
//     maths:20,
//     phy:32
// }
    const thing=["pen","toy","TV","Laptop"]
  return (
    <div>
        <Childcomponent things1={thing}/>
    </div>
  )
}

export default Parentcomponent
