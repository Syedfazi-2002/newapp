import React, { useState } from "react";
import Todo from "./Todo";
function Todolist() {

  var [x, setX] = React.useState([
    {
      title: "paybils",
      status: true
    },
    {
      title: "washing Clothes",
      status: false
    },
    {
      title: "playing games",
      status: true
    },
    {
      title: "Watching Tv",
      status: false
    },
  ])
  function del(i) {

    var temp = [...x]
    temp.splice(i, 1)
    setX([...temp])
  }
  function doneTodo(i) {
    var temp2 = [...x]
    temp2[i].status = false
    setX([...temp2])
  }
  function undoTodo(i) {
    var temp3 = [...x]
    temp3[i].status = true
    setX([...temp3])
  }
  function all(e){
    console.log(e)
    var first = [...x]
    first.filter((a)=>{
      return{a}
      
    })
    
  }
  function completed(){
 var second = [...x]
 second.filter((a)=>{
  return (a.status===false)
 })
  }
  return (
    <div>
      <h2 className="mybox">Todolist</h2>
       <h2 className="mybox">Child Component</h2>
       <input name="select" type="radio" onClick={(e)=>{all(e)}} />:All
       <input  name="select"  type="radio" onClick={()=>{completed()}} />:Completed
       <input  name="select"  type="radio" />:Not Completed
      {
        x.map((a, i) => {
          return (<Todo t={a} d={del} ind={i} done={() => doneTodo(i)} undo={() => undoTodo(i)} ></Todo>)
        })
      }
    </div>
  )
}
export default Todolist;