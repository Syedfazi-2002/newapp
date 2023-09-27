import React, { useEffect,useState } from "react";
import axios from "axios";
import {useLocation, useParams} from "react-router";
function Countrydetails(){
    var x = useParams();
   var [details,setDetails]=useState(null)
   useEffect(()=>{
    axios.get("https://restcountries.com/v3/name/"+x.cname).then((res)=>{
        setDetails({...res.data[0]})
    })
   },[x.cname])
    return (  
        details&&(
            <div className="mybox">
                
                <h3>{details.name.common}Countrydetails</h3>
                <div id= "displayflag">
                    <div id="side">
                        <img width="200 px" src={details.flags[0]} alt="dds"/>
                    </div>
                    <div>
                        <h1>{details.name.common}</h1>
                        <h1>Capital:{details.capital}</h1>
                        <h1>Population:{details.population}</h1>
                    </div>
                </div>
            
        </div>
        )
        
    )
}
export default Countrydetails