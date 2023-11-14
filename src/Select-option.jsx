import React from "react";
function Selecting(){
    var [clicked,setClicked]=React.useState("")
    function handle(e){

       setClicked(e.target.value)
    }
    console.log(clicked)
 return (
    <div>
        <select name="" id="" onChange={handle}> 
         <option value="">Please select a course</option>
            <option value="Reactjs"  >Reactjs</option>
            <option value="Nodejs" >Nodejs</option>
            <option value="MongoDb" >MongoDB</option>
            <option value="My sql" >Mysql</option>
            <option value="java">java</option>
        </select>
        <h3>You have selectd : {clicked}</h3>
    </div>
 )
}
export default Selecting;