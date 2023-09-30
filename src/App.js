import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Firstbox from './First'

function App() {
  var [x,setX]=useState("")
  var Saymyname=React.useCallback((val)=>{
   alert(val)
  })
  return (
<div className='mybox'>
   <h1>My App</h1>
   <input type="text" onChange={(event)=>{setX(event.target.value)}}/>
   <Firstbox abc={()=>{Saymyname(x)}}></Firstbox>
</div>

  );
}

export default App;
