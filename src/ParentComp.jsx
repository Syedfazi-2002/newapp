import React from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent(){
   var firstnameRef = React.useRef();
   var childRef = React.useRef();
   React.useEffect(()=>{
    firstnameRef.current.focus();
   },[])
   function handle(e){
     if(e.key==="Enter"){
      childRef.current.focus()
     }
   }
 return (
    <div>
      <h1> Parent...</h1>
      <input ref={firstnameRef} type="text" onChange={handle}  />
      <ChildComponent  ref={childRef} ></ChildComponent>
    </div>
 )
}
export default ParentComponent;