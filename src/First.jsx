import React from "react";
function Firstbox(props){
    function bbc(){
        alert("hloo")
    }
    return(
        <div className="mybox">
              <h1>First..</h1>
              <button onClick={props.abc}>Greet</button>
        </div>
    )
}
export default Firstbox;