import React from "react";
function Todo(props){
    console.log(props)
return (
   
       
    <div className="mybox"> 

    
           
        <b style={props.t.status?{textDecoration:"line-through",textDecorationColor:"brown"}:{}}>
            {props.t.title}
            <button onClick={()=>{props.d(props.ind)}}>Delete</button>
            {
                props.t.status===true&&( <button onClick={props.done}>Done</button> )
            }
            {
                props.t.status===false&&(<button onClick={props.undo}>Undo</button>)
            }
        </b>
    </div>
 
)
}
export default React.memo(Todo);