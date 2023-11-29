import React, { useState } from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";
function Detail(){
   var x = useParams()
   var [data,setData]= useState([])
   React.useEffect(()=>{
       axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
       .then((res)=>{
          setData(res.data)
       })
   },[])
  return(
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
        <center>
        <div >
          <Link to="/"><button className="back-but">Back Home</button></Link>
        </div>
        </center>
       <div>
        {
          data.drinks?.map((obj)=>{
              if(x.idDrink === obj.idDrink){
                return (
                      <div className="main-store-container">
                   <center>
                   <h3>{obj.strCategory}</h3>
                   </center>
                      
                    <div className="new-container" >
                    <div >
                     <img className="photo" src={obj.strDrinkThumb} alt="" width={400} />
                     </div>

                     <div className="data-container">
                       <p>
                       <span className="span"> Name : </span>
                       {obj.strDrink}
                       </p>
                       <p>
                        <span className="span">
                           Category :
                        </span >
                        {obj.strCategory}
                       </p>
                       <p>
                        <span className="span">
                            info :
                        </span>
                        {obj.strAlcoholic}
                       </p>
                        <p>
                          <span className="span">
                              Glass :
                          </span>
                          {obj.strGlass}
                        </p>
                        <p>
                          <span className="span">
                             Instructions :
                          </span>
                          {obj.strInstructions}
                        </p>
                        <p>
                          <span className="span">
                          Ingredients :                        
                          </span>
                          {obj.strIngredient1} {obj.strIngredient2} {obj.strIngredient3} {obj.strIngredient4}
                        </p> 
                     </div>
                    </div>

                     </div>
                )
              }
          })
        }
         
       </div>
   </div>
  )
}
export default Detail;