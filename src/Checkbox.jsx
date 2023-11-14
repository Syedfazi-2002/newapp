import React from "react";
function Boxes(){
var [data,setData]=React.useState([])
    function handleChange(e){
   if(e.target.checked===false){
    var temp = [...data]
      var i =   temp.indexOf(e.target.value)
      temp.splice(i,1)
      setData(temp)
   }
   else{
    setData([...data,e.target.value])
   }
    }
    return (
        <div className="checkbox-main">
            <input type="checkbox"  value="html" name = "course" onClick={handleChange} /> HTML <br />
            <input type="checkbox"   value="css" name = "course" onClick={handleChange}/> CSS <br />
            <input type="checkbox"   value="javascript" name = "course"  onClick={handleChange}/> JAVASCRIPT <br />
            <input type="checkbox"  value="reactjs" name = "course"  onClick={handleChange}/> REACT JS <br />
            <input type="checkbox"  value="nodejs"  name = "course" onClick={handleChange}/> NODEJS <br />
            <input type="checkbox"   value="mongodb" name = "course" onClick={handleChange}/> MONGODB <br />
            <input type="checkbox"   value="sql" name = "course" onClick={handleChange}/> MY SQL <br />

            <ul>
            {
                data.map((a)=>{
                    return (
                        <li>
                            {a}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default  Boxes;