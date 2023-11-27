import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deltodo } from "./todolistSlice";
function Todolist (){
    var [data,setData] = useState("")
    console.log(data)
    var dispatch = useDispatch()
    var {todolist} = useSelector(state=>state.t)
    console.log(todolist)
 return (
    <div className="box">
        <h1>Todolist...</h1>
        <input type="text" onChange={(e)=>{setData(e.target.value)}} />
        <button onClick={()=>{dispatch(addtodo(data))}}>addtodo</button>
         {
            todolist?.map((value,i)=>{
                return ( 
                    <li>{value} <button onClick={()=>{dispatch(deltodo(i))}}>del</button></li>
                )
            })
         }
    </div>
 )
}
export default Todolist;