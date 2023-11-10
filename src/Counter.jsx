import React from "react";
function Counter(){
    var [value,setValue]=React.useState(100);
    function increment(){
        setValue(value+1);
    }
    function decrement(){
        setValue(value-1)
    }
return(
    <div style={{border:"1px solid black",width:"300px"}}>
       <center>
       <h1>Counter{value}</h1>
       <button onClick={()=>{increment()}}>Increment</button>
       <button onClick={()=>{decrement()}}>Decrement</button>
       </center>
    </div>
)
}
export default Counter;