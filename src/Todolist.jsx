import React from "react"
import Todo from "./Todo";

function Todolist() {
    var [x, setX] = React.useState(["ali", "baba", "fourty", "theievs"])
  function details(){
    var b = document.getElementById("d2").value
    setX([...x,b])
  }
  function del(i){
    console.log("i from deleted",i)
    var temp = [...x]
    temp.splice(i,1)
    setX([...temp])
  }  
 
    return (
        <div className='parent'  >
            <h2 className='parent' >child components</h2>
            <input type="text" id="d2" />
       <button onClick={()=>{details()}}> Add</button>
            {
                x.map((todo,index) => {
                return (<Todo t={todo} d={del} i = {index}></Todo>)
                })
            }
        </div>
    )
}
export default Todolist;