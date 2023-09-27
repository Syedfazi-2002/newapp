import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link,Outlet} from "react-router-dom";
function Countries(){
    var [countries,setCountries]=useState([])
    console.log(countries)
   useEffect(()=>{
    axios.get("https://restcountries.com/v3/all").then((res)=>{
        setCountries([...res.data])
    })
   },[])
   function abc(ev){
    document.getElementById("d4").innerHTML=ev
    }
    return (
        <div className="mybox">
           <h1>Welcome to Countries</h1>
          <div style={{display:"flex"}}>
            <div style={{width:"100%"}}>
            <ul id="flag">
           {
              countries.length>0 && countries.map((country)=>{
                return<li>
                        <h3>{country.name.common}</h3>
                        <img src={country.flags[0]} alt="" />
                        <br />
                        <Link to = {"/Countries/Countrydetails/"+country.name.common}state={country}>Read More</Link>
                    </li>
             
              })
           }
           </ul>
            </div>
            <div>
                <h1>Loading the details</h1>
                <Outlet></Outlet>
            </div>
          </div>
        </div>

    )
}
export default Countries