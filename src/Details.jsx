import React from "react";
import { Link,Outlet} from "react-router-dom"; 
function Detail(prop){
  // console.log("obj details",(prop.a))
  return(
   <div>
       <center>
        
        <button>
          <Link to="/">Back to Home</Link>
          <Outlet></Outlet>
        </button>
       </center>
       <div>
         
       </div>
   </div>
  )
}
export default Detail;