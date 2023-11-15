import React from "react"
import Todolist from "./Todolist";
function Todo(props){
    console.log(props)
    console.log(props.status)
    console.log(props.done)
return (
    <div>
      <li className={props.status?{backgroundColor:"red"} :{backgroundColor:"green"}} >
        {props.title}
        <button onClick={()=>{props.done(props.i)}} >done</button>
        <button>undo</button>
      </li>
    </div>
)
}
export default Todo;