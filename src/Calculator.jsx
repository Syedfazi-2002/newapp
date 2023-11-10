import React from "react";
function CalculatorData(){
   var [data,setData]=React.useState()
     function adding(){
        var a = +document.getElementById("d1").value
       
        var b = +document.getElementById("d2").value
       
       setData(a+b)
     }
     function substract(){
        var a = +document.getElementById("d1").value
       
        var b = +document.getElementById("d2").value

        setData(a-b)
     }
     function multiple(){
        var a = +document.getElementById("d1").value
       
        var b = +document.getElementById("d2").value

        setData(a*b)
     }
     function division (){
        var a = +document.getElementById("d1").value
       
        var b = +document.getElementById("d2").value

        setData(a/b)
     }
   return (
     <div>
        <input type="text" id="d1" />
        <input type="text" id="d2" />
        <button onClick={()=>{adding()}}>addition</button>
        <button onClick={()=>{substract()}}>substract</button>
        <button onClick={()=>{multiple()}}>multiple</button>
        <button onClick={()=>{division()}}>division</button>
        <h1>{data}</h1>
     </div>
   )
}
export default CalculatorData;