import React from "react";
function Genui(){
    var [students,setStudents] = React.useState(['Pallavi','Jaya','Dharma','Souwmya','Anu','Eshwar'])
     function sortaccending(){
        var temp = [...students]
        temp.sort()
        setStudents(temp)
     }
     function sortdeccending(){
        var temp = [...students]
        temp.sort().reverse()
        setStudents(temp)
     }
    return (
        <div>
            <h1>Students</h1>
            <button onClick={sortaccending}> accending</button>
            <button onClick={sortdeccending}>Decending</button>
            {
                students.map((a)=>{
                    return(
                        <li>{a}</li>
                    )
                })
            }
        </div>
    )
}
export default Genui;