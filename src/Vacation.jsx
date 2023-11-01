import React from "react";
import axios from "axios";
function Plan(){
    var [tours,setTours]=React.useState([])
    var [loading,setLoading]=React.useState(true)
        React.useEffect(()=>{
          axios.get("https://course-api.com/react-tours-project")
          .then((res,data)=>{
           setTours(res.data)
           console.log(res)
            setLoading(false)
          })
        },[])
       function del(i){  
        var temp = [...tours]
        temp.splice(i,1)
        setTours(temp)
       }
    function read(i){
     var temp =[...tours]
     temp[i].flag=!temp[i].flag
     setTours([...temp])
     var c = document.getElementById("d4")
     if(c.innerHTML==="Readmore"){
        c.innerHTML="showless"
     }
     else{
        c.innerHTML="readmore"
     }
    }

 return (
    <div className="main-div">
        
         <center>
      <h1 >Our Tours</h1>
         {
              loading &&( 
              <center><h1>Loading...</h1></center>
            )
         }
      <hr className="hr" />
           {
            tours.map((place,i)=>{
                return (
                    <div className="start" style={{backgroundColor:"white",margin:"20px",width:447,borderRadius:"5px"}}>
                        <center>
                            <img src={place.image} style={{width:447,height:250}} alt="" />  
                            <div className="second-div">
                               
                                    <p className="name">
                                        {place.name}
                                    </p>
                                    
                                     <p className="price">
                                     <i class="bi bi-currency-dollar">
                                    {place.price}</i>
                                   </p>
                                   
                                   <p className="data">
                                    {
                                        place.flag?place.info:place.info.slice(0,300)

                                    }
                                 <button id="d4" className="read-button" onClick={()=>{read(i)}}>Readmore</button>

                                   </p>
                             
                            </div>

                            <button className="del" onClick={()=>del(i)}> Not Intrested  </button>
                        </center>
                    </div>
                )
            })
           }
         </center>
    </div>
 )
}
export default Plan;