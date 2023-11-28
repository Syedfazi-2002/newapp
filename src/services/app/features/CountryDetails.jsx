import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllCountriesQuery } from "../../countries";
import { Link } from "react-router-dom";
function CountryDetails(){
    var countryname = useParams();
    console.log(countryname);
    var {data} = useGetAllCountriesQuery();
    console.log(data)
    var url='https://en.wikipedia.org/wiki/'+countryname.name
    return(
        <div>
            <h4>CountryDetails...</h4>
            <div>
              {
              data && data.map((value)=>{
                    if(value.name.common === countryname.name){
                        return(
                            <div className="new-container">
                                <div>
                                      <img src={value.flags[0]} alt="" width={500}></img>
                                </div>
                                <div className="new-data">
                                    <h3> {value.name.common}Details</h3>     
                                    <div className="data">
                                    <h3> Country Name :{value.name.common}</h3>
                                    <h3>Country Capital :{value.capital}</h3>
                                    <h3>Population:{value.population}</h3>
                                    <p><a href={url} target='blank'>read more</a></p>
                                    <Link to="/countrieslist"><button className="back-but">back</button></Link>
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
export default CountryDetails;