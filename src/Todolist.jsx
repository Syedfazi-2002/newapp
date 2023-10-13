import React from "react";


function Todolist(){
    let [newTodo,setNewTodo]=React.useState(["laptop","bikes"])
function addnew(){
    let data = document.getElementById("d1").value
    setNewTodo([...newTodo,data])
}
function del(b){
    var temp = [...newTodo]
    temp.splice(b,1)
    setNewTodo([...temp])
 }

return (
    <div>
        <h1>Todolist</h1>
        <input type="text" id="d1" />
        <button onClick={addnew}>Add data </button>
         <ul>
            {
                newTodo.map((a,i)=>{
                    return(
                        <li className="none" >
                            {a}
                            <button onClick={()=>del(i)}>delete</button>
                            </li>
                    )
                })
            }
         </ul>
    </div>
)
}

export default Todolist;