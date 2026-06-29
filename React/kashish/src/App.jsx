import React,{useState} from 'react'
import Parentcomponent from './Parentcomponent'
import Parent from './Parent'
import UseStates from './Hooks/UseStates'
import Password  from './Hooks/Password'
import Form from './Hooks/Form'
import UseEffect from './Hooks/UseEffect'
import Input1 from './Hooks/Input1'
import Useref from './Hooks/Useref'
import UseeTimer from './Hooks/UseefTimer'
import Prev from './Hooks/Prev'
import Portfolio from './Hooks/Portfolio'
import Practice from './Hooks/Practice'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import { GlobalContext } from './Context/GlobalVariable'
import { ThemeContext } from './Context/Theme'
import { CounterContext } from './Context/Counter'

function App(){

  return (
    <div> 
      
      {/* <h2>hello</h2> 
      <Parentcomponent/> */}
      {/* <UseStates/> */}
      {/* <Parent /> */}
      {/* <Password/> */}
      {/* <Form/> */}
      {/* <UseEffect/> */}
      {/* <Input1/>
      <Useref/> */}

      {/* <UserefTimer/> */}
   
      {/* <Prev/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/prev' element={<Prev/> }/>
          <Route path='/portfolio' element={<Portfolio/> }/>
           <Route path='/practice' element={<Practice/> }/>
           <Route path='/provider' element={<GlobalContext/> }/>
           <Route path='/timer' element={<UseeTimer/> }/>
            
        </Routes>
      </BrowserRouter>
    </div>

  )
}     
export default App

