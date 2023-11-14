import React from "react";
function Table(){
    var [students,setStudents] = React.useState(
        [
          {
            firstname:'Ravi',
            lastname:'Sastri',
            gender:'male'
          },
          {
            firstname:'Sachin',
            lastname:'Tendulkar',
            gender:'male'
          },
          {
            firstname:'Mithali',
            lastname:'Raj',
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
        ]);
      function sortfristname(){
        var temp = [...students]
        temp.sort((a,b)=>{
            if(a.firstname>b.firstname){
                return 1;
            }
            if(a.firstname<b.firstname){
                return -1;
            }
            else{
                return 0;
            }
        })
        setStudents(temp)
      }
      function sortlastname(){
        var temp = [...students]
        temp.sort((a,b)=>{
            if(a.lastname>b.lastname){
                return 1;
            }
            if(a.lastname<b.lastname){
                return -1;
            }
            else{
                return 0;
            }
        })
        setStudents(temp)
      }
      function gender(){
        var temp = [...students]
        temp.sort((a,b)=>{
            if(a.gender>b.gender){
                return 1
            }
            if(a.gender<b.gender){
                return -1;
            }
            else{
                return 0;
            }
        })
        setStudents(temp)
      }
      function sortfndecending(){
        var temp = [...students]
        temp.sort((a,b)=>{
            if(a.firstname<b.lastname){
                return 1;
            }
            if(a.firstname>b.lastname){
                return -1;
            }
            else{
                return 0;
            }
        })
        setStudents(temp)
      }
      function sortlndecending(){
        var temp = [...students]
        temp.sort((a,b)=>{
            if(a.firstname<b.lastname){
                return 1;
            }
            if(a.firstname>b.lastname){
                return -1;
            }
            else{
                return 0;
            }
        })
        setStudents(temp)
      }
      function genderdec(){
        var temp = [...students]
        temp.sort((a,b)=>{
            if(a.gender<b.gender){
                return 1;
            }
            if(a.gender>b.gender){
                return -1;
            }
            else{
                return 0;
            }
        })
        setStudents(temp)
      }
  return (
   <div>
 <table border="1px solid black">
         <thead>
            <th>firstname</th>
            <th>lastname</th>
            <th>gender</th>           
         </thead>
         <tbody>
            {
                students.map((data)=>{
                  return(
                    <tr>
                        <td>{data.firstname}</td>
                        <td>{data.lastname}</td>
                        <td>{data.gender}</td>
                    </tr>
                  )
                })
            }
         </tbody>
    </table>
    <button onClick={sortfristname}>sort(a-z)firstname</button>
    <button onClick = {sortfndecending}>sort(z-a)</button>
    <button onClick={sortlastname}>sort(a-z)lastname</button>
    <button onClick={sortlndecending}> sort (z-a)lastname</button>
    <button onClick={gender}> sort(a-z)gender</button>
    <button onClick= {genderdec}>sort(z-a)</button>
   </div> 
   
  )
}
export default Table;