import React from "react";
function List(){
    var [f,setF]=React.useState([])
    function adding(){
        var g = document.getElementById("d8").value
        setF([...f,g])
    }
return (
   <div>
     <h1>LIst items</h1>
     <input id="d8" type="text" />
     <button onClick={()=>{adding()}} >add</button>
     {
        f.map((a)=>{
            return <li>{a}</li>
        })
     }
   </div>
)
}
export default List;