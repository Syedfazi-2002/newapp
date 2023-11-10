import React from "react";
function Reusing(props){
var [data,setData]=React.useState(props.start);
function inc(){
    setData(data+props.add)
}
function dec(){
    setData(data-props.add)
}
return (
    <div style={{border:"1px solid black",textAlign:"center",width:300,margin:"10px"}}>
    <h1>Count:{data}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={()=>{dec()}}>decrement</button>
    </div>
)
}
export default Reusing;