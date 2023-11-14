import React from "react";
function Data(){
    var[value,setValue]=React.useState('')
    function handle(e){
       setValue(e.target.value)
    }
return (
    <div className="data-fill">
        <input type="text"  onKeyUp={handle}/>
        <h3>You are Entered the name :{value}</h3>
    </div>
)
}
export default Data;