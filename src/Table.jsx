import React from "react";
function Formation (){

    var [students,setStudents] =React.useState([
        {
          firstname:'ravi',
          lastname:'sastri',
          gender:'male'
        },
        {
          firstname:'sachin',
          lastname:'tendulkar',
          gender:'male'
        },
        {
          firstname:'mithali',
          lastname:'raj',
          gender:'female'
        },
        {
          firstname:'Rohit',
          lastname:'Sharma',
          gender:'male'
        },
        {
          firstname:'Smriti',
          lastname:'Mandhana',
          gender:'female'
        },
        {
          firstname:'Virat',
          lastname:'Kohli',
          gender:'male'
        },
      ])
  return(
    <table className="tbody">
        <thead>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>          
        </thead>
        <tbody >
           {
             students.map((a)=>{
                return(
                    <tr style={a.gender==="male"?{backgroundColor:"lightblue"}:{backgroundColor:"lightpink"}} >
                        <td className="td">{a.firstname}</td>
                        <td className="td">{a.lastname}</td>
                        <td className="td">{a.gender}</td>
                    </tr>
                )
             })
           }
        </tbody>
    </table>
  )
}
export default Formation;