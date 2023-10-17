import React from "react";
import Todolist from "./Todolist";
function Todo(props){
    console.log(props.i)
return (
    <div className='parent'>
        <b>{props.t}</b>
        <button onClick={()=>{props.d(props.i)}} >Delete</button>
    </div>
)
}
export default React.memo(Todo)