import React, { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0)
    function abc(){
       setCount(count+1)
    }
    function bbc(){
        setCount(count-1)
     }
     function ccc(){
        setCount(0)
     }
    return (
        <div className="mybox">
            <h1>Welcome to counter :{count}</h1>
            <button onClick={abc}>Inc</button>
            <button onClick={bbc}>Dec</button>
            <button onClick={ccc}>Reset</button>
        </div>
    )
}
export default Counter;