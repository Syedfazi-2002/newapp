import React from "react";
function DynamicArray (){
    var [ oldData, SetOldData] = [ "Apple", "Banana", "Grape", " Mango"]; 
    function CilckMe(){
        var x = document.getElementById("d1").value
        SetOldData([...oldData,x])
    }
return (
    <div>
        <input type="text"  id="d1" />
        <button onClick={() => CilckMe()}> Add Data </button>
        {
            oldData.forEach((data,index)=>{
                return (
                    <li>{index}{data} </li>
                )
            })
        }
    </div>
)
}
export default DynamicArray;