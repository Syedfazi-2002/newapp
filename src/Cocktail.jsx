import React from "react";
import axios from "axios";
import Detail from "./Details";
import { Link,Outlet } from "react-router-dom";
function Drinks(){
    var [data,setData]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((res)=>{
           setData(res.data)
        })
    },[])
    // console.log(data)
    function found(){
      var s = document.getElementById("d4").value
      console.log(s)
      var temp = data.drinks?.filter((a)=>{
        console.log(a)
          return (a.strCategory.toLowerCase().startsWith(temp))
      })
    }
 
    console.log(data)
   return (
           <div>
            <div className="nav-bar">
               <center>
               <h3> the cocktail </h3>
               </center>
            </div>
           <center>
           
           <div className="search">
                <h6>search for the cocktail</h6>
                <input type="text"  className="search-box" id="d4" onKeyUp={()=>{found()}}/>
            </div>
            <h3>menu</h3>
           </center>
           
            <div className="head-div">
               {
                data.drinks?.map((a,i)=>{
                    return (
                        <div className="main-div">
                         
                           <img  className="pic"  src={a.strDrinkThumb} alt="" />
                          
                               <div className="details">

                               <h1>{a.strCategory}</h1>
                               <h3>{a.strGlass}</h3>
                               <h6 className="alcoholic">{a.strAlcoholic}</h6>
                               {/* <button className="button" onClick={<Detail a={JSON.stringify(a)}></Detail>}> */}
                                {/* <Link to={`/${a.strCategory}/Details`}> Details</Link> */}
                                  
                                {/* </button> */}
                                {/* <Outlet></Outlet> */}
                               </div>
                           
                        </div>
                    )
                })
               }
            </div>
           </div>
   )
}
export default Drinks;