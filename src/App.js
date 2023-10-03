import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
function App() {
  var [x,setX]=React.useState()
  var [a,setA]=React.useState(0)
  var[b,setB]=React.useState(0)
  return (
    <div className="my-box">
     <h1>App...</h1>
     A:<input type="text" onChange={(ev)=>{setA(Number(ev.target.value))}}/>
    </div>
  );
}
export default App;
