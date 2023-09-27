import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  function domgenerate(){
    var c = document.getElementById("d1").value
    document.getElementById("d2").innerHTML=c
  }
  var [y,setY]=useState("");
  function reactgenerate(e){
   setY(e)
  }
  return (
    <div>
      <h1> lets Play with Forms</h1>
      <label htmlFor="">This is dom element :</label>
      <input id="d1" type="text" onKeyUp={()=>{domgenerate()}}/>
       You Entered:<h1 id="d2"></h1>
      <hr/>
      <label htmlFor="">This is react element :</label>
      <input type="text" onKeyUp={(ev)=>{reactgenerate(ev.target.value)}}/>
      <h1>You Entred :{y}</h1>
      
    </div>
  );
}

export default App;
