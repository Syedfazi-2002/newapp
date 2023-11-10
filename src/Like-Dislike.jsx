import React from "react";
function Likes(){
var [like,setLike]=React.useState(0)
var [dislike,setDislike]=React.useState(0)
function inc(){
    setLike(like+1)
}
function dlike(){
    setDislike(dislike+1)
}
return(
    <div>
        <button onClick={inc}>like</button>{like}
        <button onClick={dlike}>Dislike</button>{dislike}
    </div>
)
}
export default Likes;