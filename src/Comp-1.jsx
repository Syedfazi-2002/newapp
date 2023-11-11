import React from "react";
function FirstComponent(){
    var [data,setData]=React.useState(["apple","mango","guava","lemon","pineapple"]);
function newData(){
   var newInp = document.getElementById("d1").value
   setData([...data,newInp])
}
function ascending(){
    var temp = [...data]
    temp.sort();
    setData(temp)
   
}
function Desecinding(){
 var temp =[...data]
 temp.sort().reverse()
 setData(temp)
}
 return(
    <div>
        <h1> Generating fruits</h1>
        <div>
        <input type="text"  id= "d1" />
                         <button onClick={()=>{newData()}}>add data</button><br />
                         <button onClick = {()=>{ascending()}}>Ascending order</button>
                         <button onClick={()=>{Desecinding()}}>Desecinding order</button>
          {
             data.map((value)=>{
                return (
                    <div>
                         <li>{value}</li>
                         
                         </div>
                       )
                     })
            }
        </div>
    </div>
 )
}
export default FirstComponent;