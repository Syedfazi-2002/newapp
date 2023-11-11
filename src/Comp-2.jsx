import React from "react";
function Table(){
 var [data,setData]=React.useState([
    {
        "firstname": "praveen",
        "lastname": "gubbala",
        "age": 36,
        "gender": "female",
        "city": "hyd",
        "salary": 10000
      },
      {
        "firstname": "srikanth",
        "lastname": "gubbala",
        "age": 32,
        "gender": "male",
        "city": "bengaluru",
        "salary": 20000
      },
      {
        "firstname": "pradeep",
        "lastname": "reddy",
        "age": 21,
        "gender": "male",
        "city": "hyd",
        "salary": 25000
      },
      {
        "firstname": "preeti",
        "lastname": "haia",
        "age": 31,
        "gender": "female",
        "city": "delhi",
        "salary": 30000
      },
      {
        "firstname": "kiran",
        "lastname": "gubbala",
        "age": 52,
        "gender": "male",
        "city": "bengaluru",
        "salary": 29000
      },
      {
        "firstname": "jayaram",
        "lastname": "reddy",
        "age": 54,
        "gender": "male",
        "city": "mumbai",
        "salary": 99000
      }
 ])
 function asscending(){
    var temp = [...data]
    temp.sort((a,b)=>{
        if(a.firstname>b.firstname){
            return 1 ;
        }
        if(a.firstname<b.firstname){
            return -1 ;
        }
        else{
            return 0 ;
        }
    })
    setData(temp)
 }
 function descending(){
   var temp = [...data]
   temp.sort((a,b)=>{
    if(a.lastname>b.lastname){
        return 1;
    }
    if(a.lastname<b.lastname){
        return -1 ;
    }
    else{
        return 0 ;
    }
   })
   setData(temp)
 }

 return (
          <table style={{border:"1px solid black"}}>
            <thead>
                <th onClick={()=>{asscending()}}>Firstname</th>
                <th onClick={()=>{descending()}}>Lastname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>City</th>
                <th>Salary</th>
            </thead>
            <tbody>
                    {
                        data.map((value)=>{
                            return(
                                <tr>
                                      <td  style={{border:"1px solid black"}}>{value.firstname}</td>
                                      <td  style={{border:"1px solid black"}}>{value.lastname}</td>
                                      <td  style={{border:"1px solid black"}}>{value.age}</td>
                                      <td  style={{border:"1px solid black"}}>{value.gender}</td>
                                      <td  style={{border:"1px solid black"}}>{value.city}</td>
                                      <td  style={{border:"1px solid black"}}>{value.salary}</td>
                                </tr>
                               
                            )
                        })
                    }
            </tbody>
          </table>
 )
}
export default Table ;