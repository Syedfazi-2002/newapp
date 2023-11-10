import React from "react";
function Todolist(){
var [data,setData]=React.useState(["fazil","charan","vishnu"])

function adddata(){
    var newInp = document.getElementById("inp").value
    setData([...data,newInp])
}
return(
    <div>
       <div>
        <input type="text" id="inp" />
        <button onClick={()=>{adddata()}}>Add</button>
           {
            data.map((a)=>{
                return (
                    <li>{a}</li>
                )
            })
           }
       </div>
    </div>
)
}
export default Todolist;