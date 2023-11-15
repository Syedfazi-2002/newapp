import React from "react";
function UseCallback(props){
 return (
    <div className="small-container">
        <button onClick={props.data} >click</button>
    </div>
 )
}
export default React.memo(UseCallback)