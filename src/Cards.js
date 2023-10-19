import React from "react";
import { useState } from "react";
function Card(){
    var [index,setIndex]=React.useState(0)
   
    
return (
    <div  className="boxcreating">
        <img className="pics" src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg" alt="" />
        <p></p>
        
        <button className="backward"><i class="bi bi-skip-backward-fill"></i></button>
        <button className="forward"><i class="bi bi-skip-forward-fill"></i></button>
        <br />
        <button className="suprise">SupriseMe</button>
    </div>
)
}
export default Card;