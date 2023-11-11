import React from "react";
function Dynamic(){
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
          }
        ])

        return(
            <table style={{border:"1px solid black"}}>
                <thead>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>city</th>
                    <th>salary</th>
                </thead>
                <tbody>
                    {
                        data.map((a)=>{
                            return (
                                <tr>
                                    <td style={{border:"1px solid black"}}>{a.firstname}</td>
                                    <td style={{border:"1px solid black"}}>{a.lastname}</td>
                                    <td style={{border:"1px solid black"}}>{a.age}</td>
                                    <td style={{border:"1px solid black"}}>{a.gender}</td>
                                    <td style={{border:"1px solid black"}}>{a.city}</td>
                                    <td style={{border:"1px solid black"}}>{a.salary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        )

}
export default Dynamic;