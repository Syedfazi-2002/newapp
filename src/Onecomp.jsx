import React from "react";
import { useState } from "react";
import ChildComponent from "./AnotherComp";
function ParentComponent(){

    var [courses,setCourse] = React.useState([
        {
          cname:'PHP',
          trainer:'Ramesh',
          cost:20000
        },
        {
          cname:'CCNA',
          trainer:'Jayaram',
          cost:40000
        },
        {
          cname:'C++',
          trainer:'Kavya',
          cost:20000
        },
        {
          cname:'Java',
          trainer:'Venkat',
          cost:30000
        },
      ])
 return (
    <div >
       {
        courses.map((a)=>{
            return (
                <div className="main-container" >
                   <ChildComponent course={a.cname} trained={a.trainer} price={a.cost}></ChildComponent>
                </div>
            )
        })
       }
    </div>
 )
}
export default ParentComponent;