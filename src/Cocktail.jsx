import React,{useState} from "react";
import axios from "axios";
import Detail from "./Details";
import { Link,Outlet } from "react-router-dom";
function Drinks(){
    var [data,setData]= useState([])
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
            <div>
            <nav class="navbar navbar-expand-lg bg-danger bg-body-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">The cocktail DB</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
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