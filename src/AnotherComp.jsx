import React from "react";
import ParentComponent from "./Onecomp";
function ChildComponent(props){
    console.log(props)
    return(
        <div>
            <h4>Course Name :{props.course}</h4>
             <h4> TrainedCourse :{props.trained}</h4>
            <h4> Price :{props.price}</h4>
        </div>
    )
}
export default ChildComponent;