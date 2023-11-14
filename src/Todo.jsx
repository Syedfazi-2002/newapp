import React from "react";
function Todo(){
    var [data,setData]=React.useState(["loans","installments","currentbill","waterbill"]);
    function del(index){
        var temp = [...data];
        temp.splice(index,1)
        setData(temp)
    }
    return(
        <div className="main-div">
            <h1>Todolist</h1>
            {
                data.map((a,i)=>{
                    return (
                        <div className="div">{a} <button onClick={()=>{del(i)}}>delete</button></div> 
                    )
                })
            }
        </div>

    )
}
export default Todo;