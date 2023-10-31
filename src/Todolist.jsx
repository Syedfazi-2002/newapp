import React from "react";
function Student() {
  function firstname() {

  }
  var [newTodo, setNewTodo] = React.useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender:"",
    courses: []
  })
  function displayData() {
    alert(JSON.stringify(newTodo))
  }
  function firstname(e) {
    setNewTodo({ ...newTodo, firstname: e.target.value })
  }
  function lastname(e) {
    setNewTodo({ ...newTodo, lastname: e.target.value })
  }
  function dob(e) {
    setNewTodo({...newTodo, dob: e.target.value })
  }
  function gender1(e){
    setNewTodo({...newTodo,gender:e.target.value})
  }
  function checkbox(e){
    // console.log(e)
    if(e.target.checked===true){
      console.log("checked")
      setNewTodo({...newTodo,courses:[...newTodo.courses,e.target.value]})
    }
    else{
      var temp = [...newTodo]
      var index = 
      console.log("e.target.value", e.target.value)
      console.log(newTodo)
      // setNewTodo([...temp])
      updateCourse(newTodo.courses,e.target.value)

    }
  }
  const updateCourse = (todo, val) =>{
    console.log("todo", todo)
    console.log(val)
  }
  console.log("newTodo", newTodo)
  return (
    <div>
      <input type="text" placeholder="firstname" required onChange={(e) => { firstname(e) }} /><br />
      <input type="text" placeholder="lastnamename" required onChange={(e) => { lastname(e) }} /><br />
      <input type="date" required onChange={(e) => { dob(e) }} /><br />
      Gender : <input type="radio" value="male" name="gender" onChange={(e) => { gender1(e) }} /> Male
      <input type="radio" value="female" name="gender" onChange={(e) => { gender1(e) }} /> Female
      <input type="radio" value="chran-teja" name="gender" onChange={(e) => { gender1(e) }} />  Charan trans-Gender<br />
      <input type="checkbox" value="node"  onChange={(e)=>{checkbox(e)}} />:Node Js <br />
      <input type="checkbox" value="react" onChange={(e)=>{checkbox(e)}} />:React Js<br />
      <input type="checkbox" value="mangoo" onChange={(e)=>{checkbox(e)}} />:MonGo Db<br />
      <input type="checkbox" value="sql" onChange={(e)=>{checkbox(e)}} />:my sql<br />
      <button onClick={() => { displayData() }}>Add data</button>
    </div>
  )
}
export default Student;