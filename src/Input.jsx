import React from "react";
function Onkeyup(){
    var [data,setData]=React.useState("")
    function handle(e){
       setData(e.target.value)
    }
 return (
    <div>
        <input type="text"  onKeyUp={handle}/>
        <h3>You have Entered:{data} </h3>
    </div>
 )
}
export default Onkeyup;