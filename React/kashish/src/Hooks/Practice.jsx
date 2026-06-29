import React, { useEffect, useState } from 'react'

const Practice = () => {
    const[num,setNum]=useState(0)
    const[info,setInfo]=useState("")
    const[show,setShow]=useState(false)
    const[text,setText]=useState("")
    const[todo,setTodo]=useState("")
    const[tasks,setTasks]=useState([])
    const[color,setColor]=useState("bg-white")
    const[count,setCount]=useState(0)
    const[number,setNumber]=useState(0)
    const[type,setType]=useState("Even")
    const[users,setUsers]=useState([])
    const inc=()=>{
        setNum((num)=>num+1)
    }
    const dec=()=>{
        setNum((num)=>num-1)
    }
      const reset=()=>{
        setNum(0)
    }
    
    const removeTask=()=>{
        setTodo("")
    }
    const addTask=()=>{
        if(todo.trim()==="")return
        setTasks([...tasks,todo])
        setTodo("")
    }
    useEffect(()=>{
        document.title=`Count: ${count}`
    },[count])
    useEffect(()=>{
        if(number%2==0){
            setType("even")
        }
        else{
            setType("odd")
        }
    },[number])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>
                <h1 className='ml-20 font-bold'>UseState</h1><br />
        <div>
            <h1  className='ml-20 font-bold'>Counter App</h1>
      <p>Number:{num}</p>
      <button onClick={inc} className='border-5 rounded-xl m-5 '>Increment</button>
        <button onClick={dec} className='border-5 rounded-xl m-5'>Decrement</button>
        <button onClick={reset} className='border-5 rounded-xl m-5'>Reset</button>
    </div>

    <div>
        <h1 className='ml-20 font-bold'>Hide/Show Text</h1>
        <input type="text" className='border-5 rounded-l m-5' value={info} onChange={(e)=>setInfo(e.target.value)}/>
        <button onClick={()=>(setShow(!show))} className='border-5 rounded-xl m-5 '>Show/hide</button>
        {show && <p>{info}</p>}
    </div>
    <div>
        <h1 className='ml-20 font-bold'>Character Counter</h1>
        <input type="text" className='border-5 rounded-l m-5' value={text} onChange={(e)=>setText(e.target.value)}/>
        <p>Total character : {text.length}</p>
    </div>

        <div>
            <h1 className='ml-20 font-bold'>To-Do List</h1>
            <input type="text" className='border-5 rounded-l m-5' value={todo} onChange={(e)=>setTodo(e.target.value)} /><br />
            <button onClick={addTask} className='border-5 rounded-xl m-5'>Add Task</button>
            <button onClick={removeTask} className='border-5 rounded-xl m-5'>Remove Task</button>
            <ul>
                {tasks.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
            </ul>
    </div>

    <div style={{ backgroundColor:color}} className='h-screen text-center pt-10'>
        <h1 className='ml-20 font-bold'>Change The Background Color</h1>
        <button onClick={()=>setColor("red")} className='border-5 rounded-xl m-5'>Change bg color To Red</button>
        <button onClick={()=>setColor("blue")} className='border-5 rounded-xl m-5'>Change bg color To blue</button>
        <button onClick={()=>setColor("green")} className='border-5 rounded-xl m-5'>Change bg color To Green</button>
        <button onClick={()=>setColor("white")} className='border-5 rounded-xl m-5'>Reset Color</button>
    </div>

            <h1 className='ml-20 font-bold'>UseEffect</h1><br />
        <div>
                    <h1 className='ml-20 font-bold'>Document Title Updater</h1>
                    <p className='ml-10'>Counter :{count} </p>
                    <button onClick={()=>{setCount(0)}} className='border-5 rounded-xl m-5 '>Reset</button>
        <button onClick={()=>{setCount(count+1)}} className='border-5 rounded-xl m-5'>Increment</button>
        <button onClick={()=>{setCount(count-1)}} className='border-5 rounded-xl m-5'>Decrement</button>
            </div>   

            <div>
                <h1 className='ml-20 font-bold'>Odd/Even Checker</h1>
                <p>{count}:{type}</p>
                </div> 

        <div>
            <h1 className='ml-20 font-bold'>Fetch with Api</h1>
            <div className='p-5'>
                <h1 className='text-2xl font-bold mb-5'>User List</h1>
                {users.map((user)=>(
                    <div key={user.id} className='border p-3 mb-3'>
                        <h2 className='font-bold'>{user.name}</h2>
                        <p >{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))}
            </div>
            </div>        
    </div>
      
  )
}

export default Practice
