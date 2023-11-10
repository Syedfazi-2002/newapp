import React from "react";
function Add(){
    var [value,setValue]=React.useState()
  function adddata(){
    var firstInp = +document.getElementById("inp1").value
    var secondInp = +document.getElementById("inp2").value
   setValue(firstInp+secondInp)

  }
 return (
  <div>
    <input type="text" id="inp1" />
    <input type="text"  id="inp2"/>
    <button onClick={()=>{adddata()}}> click</button>
    <h1>{value} </h1>
  </div>
 )
}
export default Add;