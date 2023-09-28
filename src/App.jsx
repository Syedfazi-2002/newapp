import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function abc(ev){
var d = ev
document.getElementById("d1").innerHTML=document.getElementById("dd").value
  }
  var [v,setV]=useState("")
  function abb(ev){
    setV(ev)
  }
  return (
    <div >
     <h1>Learing on Forms in React JS</h1>
     <label> this is the dom form  element :</label>
     <input type="text" onKeyUp={(ev)=>{abc()}} id="dd"/>
     <h1 id="d1">You Entered:</h1>
     <hr/>

     <label> this is the  React form element :</label>
     <input type="text" onKeyUp={(ev)=>{abb(ev.target.value)}}/>
     <h1 id="d3">You Entered:{v}</h1>
    </div>
  );
}

export default App;
