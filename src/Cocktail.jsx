import React,{useState} from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import { Outlet } from "react-router-dom";
function Drinks(){
    var [data,setData]= useState([])
    React.useEffect(()=>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((res)=>{
           setData(res.data)
        })
    },[])
 
    console.log(data)
   return (
           <div>
            <div>
            <nav class="navbar navbar-expand-lg bg-primary bg-body-danger">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to= "/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
           <center>

           <div className="menu">
           <h3> Cocktail Menu</h3>
           </div>
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
                               <Link to= {`/cocktail/${a.idDrink}`}><button className="but-del">Details</button></Link>
                               </div>
                           
                        </div>
                    )
                })
               }
            </div>
            <Outlet></Outlet>
           </div>
   )
}
export default Drinks;