import logo from './logo.svg';
import React, {useEffect} from 'react';
import Another from './Another';
import './App.css';


function App(){
  var firstnameRef= React.useRef()
  var lastnameRef= React.useRef()
  var addressRef=React.useRef()
 
  function abc(e){
       if(e.key==="Enter"){
        lastnameRef.current.focus()
       }
  }
  function bbc(e){
    if(e.key==="Enter"){
       addressRef.current.focus()
    }
}
  useEffect (()=>{
      firstnameRef.current.focus()
  },[])
  return (
    
    <div>
    <input type="text" ref={firstnameRef} onKeyUp={(e)=>{abc(e)}}/>
    <br/>
    <input type="text" ref={lastnameRef}  onKeyUp={(e)=>{bbc(e)}}/>
    <Another ref={addressRef} ></Another>
   
    </div>
     
  );
}

export default App;
