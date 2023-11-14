import React from "react";
function Radio(){
    var [select,setSelect]=React.useState("")
    function handle(e){
     setSelect(e.target.value)
    }
return (
    <div>
        <input type="radio" name="firstname" value="Anu" onChange={handle} /> : Anu  <br />
        <input type="radio" name="firstname" value="Shamala" onChange={handle} />  : Shamala <br />
        <input type="radio" name="firstname" value="Preveen" onChange={handle}/>  :Praveen <br />
        <input type="radio" name="firstname" value="pramila" onChange={handle}/> :Pramila<br />
        <input type="radio" name="firstname" value="Anjali" onChange={handle}/> :Anjali <br />
        <h3>You are clicked the :{select} </h3>
    </div>
)
}
export default Radio;