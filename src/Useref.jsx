import React from "react";
function UserRef(){
    var firstnameRef = React.useRef();
    var lastnameRef = React.useRef();
    var cityRef = React.useRef();
    var stateRef = React.useRef();
    React.useEffect(()=>{
          firstnameRef.current.focus();
    },[])
function handleFirstname(e){
 if(e.key==="Enter"){
    lastnameRef.current.focus();
 }
}
function handleLastname(e){
    if(e.key === "Enter"){
        cityRef.current.focus();
    }
}
function handleCity(e){
    if(e.key==="Enter"){
        stateRef.current.focus();
    }
}
function handleState(e){
if(e.key==="Enter"){
    firstnameRef.current.focus();
}
}
return(
    <div>
       
        <input type="text" ref = {firstnameRef} placeholder="firstname" onKeyUp={handleFirstname} />
        <input type="text" ref = {lastnameRef} placeholder="lastname" onKeyUp= {handleLastname}/>
        <input type="text" ref={cityRef} placeholder="city" onKeyUp={handleCity}/>
        <input type="text" ref={stateRef} placeholder="state" onKeyUp={handleState}/>
    </div>
)
}
export default UserRef;