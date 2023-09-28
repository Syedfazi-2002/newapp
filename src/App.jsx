import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  var firstnameref=React.useRef();
  var lastnameref=React.useRef();
  var display=React.useRef();
    var [d,setD]=useState("");
    function abc(){
       var a =+(firstnameref.current.value)
      var b =+(lastnameref.current.value)
      setD(a+b)
  }
  function bbb(){
    var a =-(firstnameref.current.value)
   var b =-(lastnameref.current.value)
   setD(a+b)
}
function ccc(){
  var a =+(firstnameref.current.value)
 var b =+(lastnameref.current.value)
 setD(a/b)
}
function ddd(){
  var a =+(firstnameref.current.value)
 var b =+(lastnameref.current.value)
 setD(a*b)
}
  return (
    <div >
     <input type="text" ref={firstnameref}/><br/>
     <input type="text" ref={lastnameref} /><br/>
     <button onClick={()=>{abc()}}>Addition</button>
     <button onClick={()=>{bbb()}}>Subraction</button>
     <button onClick={()=>{ccc()}}>Division</button>
     <button onClick={()=>{ddd()}}>Multiplication</button>
     <h1 >{d}</h1>
    </div>
  );
}
export default App;
