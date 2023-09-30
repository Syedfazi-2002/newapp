import React from "react";

 var Another = React.forwardRef(function(props,r1){
    console.log(props)
    console.log(refs)
    return(
    <div id="d1" style={{border:"1px solid",padding:"10px",margin:"10px"}}>
     <h1>Another</h1>
    <input type="text" ref={r1} />
   </div> 
    )  
 })
export default Another;