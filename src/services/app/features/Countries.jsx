import React from "react"
import { useGetAllCountriesQuery } from "../../countries";
import { Link } from "react-router-dom";
function Countries(){
      var {isLoading,data} = useGetAllCountriesQuery();

  return(
    
    <div>
        <h3>Countries..</h3>
        <div className="main-container">
            
               {
                    isLoading && <h4>Loading...</h4>
                }
            {
                data?.map((country)=>{
                    return (
                      <Link to ={`countrydetails/${country.name.common}`}>
                      <div className="small-container">                         
                           <div>
                                 <img src={country.flags[0]} alt="" width={150} />
                           </div>
                       
                           <span>{country.name.common} </span> 
                        </div>     
                        </Link>               
                    )
                })
            }
        </div>
    </div>
  )
}
export default Countries;