import React from "react";
function Bootstrap(){
    var [likes,setLikes]=React.useState(0)
    var [dislike,setDislike]=React.useState(0)
    function inc(){
        setLikes(likes+1)
    }
    function dec(){
        setDislike(dislike+1)
    }
return (
    <div className="main-container">
        <h1>likes and dis-likes </h1>
        <div>
        <i class="bi bi-hand-thumbs-up-fill" onClick={inc}></i> : {likes}
        <i class="bi bi-hand-thumbs-down-fill" onClick={dec}></i> : {dislike}
        </div>
    </div>
)
}
export default Bootstrap;
