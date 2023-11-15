
import './App.css';
import React from 'react';
import UsecallbackHook from './Usecallback-hook';
function App() {
  var [x,setX] =React.useState("")

  var greetings = React.useCallback(()=>{
    alert(x)
  })
  return (
    <div className="App">
      <h1>App..</h1>
      <input onChange={(e)=>{setX(e.target.value)}}></input>
     <UsecallbackHook  data={greetings}></UsecallbackHook>
    </div>
  );
}

export default App;
