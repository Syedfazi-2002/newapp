import React, { useState } from "react";
import {connect} from "react-redux"
function TodolistComponent(props){
    console.log(props)
    var [newdata,setNewdata]=useState([])
    function deletedata(index){
        // alert(index)
       var temp = [...props.t.todolist,newdata]
       console.log(temp)
       temp.splice(index,1)
       setNewdata(temp)
    }
return (
    <div className="mybox">
          <input type="text" onChange={(e)=>{setNewdata(e.target.value)}} />
          <button onClick={()=>{props.dispatch({type:"ADDTODO",payload:newdata})}}>Add Todo</button>
          <ul>
            {
                props.t.todolist.map((a,i)=>{
                    return (
                        <li>{a} <button onClick={()=>{deletedata(i)}}>del</button></li>
                    )
                })
            }
          </ul>
    </div>
)
}
export default  connect(function (store){return store})(TodolistComponent);