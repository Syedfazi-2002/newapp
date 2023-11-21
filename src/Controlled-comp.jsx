import React from "react";
function ControlledComponent(){
    var [formdata,setFormdata]= React.useState(
        {
            firstname : "",
            lastname : "",
            Dob : "",
            gender : "",
            Subjects : [] 
        }
    )
    var [newdata,setNewdata] = React.useState([])

    function generateData(){
      setNewdata([...newdata,{...formdata}])
      // alert(JSON.stringify(formdata))     
  }
    function handlefirstname(e){
     setFormdata({...formdata,firstname:e.target.value})
    }
    function handlelastname(e){
     setFormdata({...formdata,lastname:e.target.value})
    }
   
    function handledob(e){
      setFormdata({...formdata,Dob:e.target.value})
    }
    function handlegender(e){
      setFormdata({...formdata,gender:e.target.value})
    }
    function handleCourse(e){
      console.log(e.target.checked)
      if(e.target.checked===true){
        setFormdata({...formdata,Subjects:[...formdata.Subjects,e.target.value]})
      }
      else{
        var temp = [...formdata.Subjects]
        var ind = temp.indexOf(e.target.value)
        temp.splice(ind,1)
        setFormdata({...formdata,Subjects:[...temp]})
      }
    }
return (
    <div className="main-div">
        <h1>controlled component...</h1>
        Firstname : <input type="text" onChange={(e)=>{handlefirstname(e)}} /> <br />
        Lastname : <input type="text" onChange={(e)=>{handlelastname(e)}} /> <br />
        Date of Birth : <input type="date" onChange = {(e)=>{handledob(e)}} /> <br />
        Gender :  <input type="radio" name="gender" value="male" onChange={(e)=>{handlegender(e)}} /> : male 
         <input type="radio"  name="gender"  value="female" onChange={(e)=>{handlegender(e)}}  /> : Female  
         <input type="radio"  name="gender"   value="others" onChange={(e)=>{handlegender(e)}} /> : Others <br />
        <input type="checkbox" value="html" onChange={(e)=>{handleCourse(e)}} /> : HTML  <br />
        <input type="checkbox" value="css" onChange={(e)=>{handleCourse(e)}}/> : CSS   <br />
        <input type="checkbox" value="javascript" onChange={(e)=>{handleCourse(e)}}/> : JAVASCRIPT  <br />
        <input type="checkbox" value="reactjs" onChange={(e)=>{handleCourse(e)}} /> : REACT JS <br />
         <button onClick={()=>{generateData()}}>Add data</button>

         <ul className="ul-data">
          {
            newdata.map((value)=>{
              return (
                <div className="data-box">
                  <li> Full name :{value.firstname.toUpperCase()} {value.lastname.toLowerCase()}</li>
                  <div>
                    Dob : {value.Dob}                                  
                  </div>
                  <div> Gender : {value.gender}   </div>
                  <div> Courses :{value.Subjects}</div>
                </div>
              )
            })
          }
         </ul>
    </div>
)
}
export default ControlledComponent;