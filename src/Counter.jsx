import React from "react";
function Counter(props){
    var [value,setValue]=React.useState(props.start)
    function inc(){
      setValue(value+props.add)
    }
    function dec(){
        setValue(value-props.add)
    }
return (
    <div>
        <h1>Count :{value}</h1>
        <button className="in"  onClick={inc} >Increment</button>
        <button className="de" onClick={dec}>Decrement</button>
    </div>
)
}
export default Counter