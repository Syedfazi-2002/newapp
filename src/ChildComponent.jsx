import React from "react";
  var ChildComponent = React.forwardRef(
    function (props,refs){
        console.log(refs)
        
    return (
        <div>
            <h1>ChildComponent...</h1>
            <input type="text"  ref={refs} />
        </div>
    )
  })
export default ChildComponent;
