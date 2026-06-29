import React from 'react'

const Childcomponent = ({things1}) => {
  return (
    <div>
        <div>{
            things1.map((thing)=>{
                return (
                <>
                <ul>
                    <li>{thing}</li>
                </ul>
                </>)
            })
}
</div>
    </div>
  )
}
export default Childcomponent
