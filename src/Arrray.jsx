import React from "react"
function Desktop(){
   var [data,setData]=React.useState(["pallavi-prasanth","shivaji","shoba-shetty","prince-yawar","Rathika-rose"])
    return (
        <div className="main-container">

            <h3>Students</h3>
        {
            data.map((a)=>{
                return (
                    <li>{a}</li>
                )
            })
        }
        </div>
    )

}
export default Desktop;