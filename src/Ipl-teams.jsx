import React from "react"
import Reuse from "./Props-1";
function IplTeam(props){
    console.log(props.tname)
    console.log(props.players)
return (
    <div className="small-container">
      <h1>{props.tname}</h1>
      {
        props.players.map((a)=>{
            return(<li>{a}</li>)
        })
      }
    </div>
)
}
export default IplTeam;