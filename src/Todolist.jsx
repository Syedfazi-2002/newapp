import React from "react"
import Todo from "./Todo"
function Todolist(){
    var [todos,setTodos] = React.useState([
        {
          title:'clear bills',
          status:false
        },
        {
          title:'Moksha School',
          status:true
        },
        {
          title:'Manas Bus Fee',
          status:false
        },
        {
          title:'Gold Bill',
          status:false
        },
        {
          title:'Current Bill',
          status:true
        },
      ])
      function displayData(){
        var newInp = document.getElementById('d1').value
        setTodos([...todos,{title:newInp,status:false}])
      }

      var done = React.useCallback(function(i){
       var temp = [...todos]
       temp[i].status = ! temp[i].status
       setTodos([...temp])
      },[])

      
      return (
        <div className="main-container">
            <h3>Todolist</h3>
            <input type="text" id="d1" />
            <button onClick={displayData}>Add data</button>
            {
                todos.map((values,index)=>{
                    return(
                        <Todo title ={values.title} status={values.status}  done={done} i ={index}></Todo>
                    )
                })
            }
        </div>
      )
}
export default Todolist;