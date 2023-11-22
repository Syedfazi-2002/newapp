import React,{useState,useEffect} from "react"
import axios from "axios";
function PostApi(){
var [contact,setContact] = useState(
    {
        fullname:'',
        email : "" ,
        mobilenumber : "",
        orgname : "",
        message : ""
    }
    )
   useEffect (()=>{
    axios.get("http://localhost:4000/contact")
    .then((res)=>{
        console.log(res.data)
    })
   })


const handleSubmit = (e) =>{
    e.preventDefault();
axios.post("http://localhost:4000/contact",contact)
.then((res)=>{
    console.log("after submit",res)
})

        // console.log("post created :",response.data)
}

 return(
    <div className="data-field">
        <center>
        <h1> Post method using axios</h1>
        </center>
           <center>
           <form onSubmit={handleSubmit} className="form" >
                <label className="input-field">
                    Full name :   <input type="text" onChange={(event)=>{setContact({...contact,fullname:event.target.value})}}/>
                </label >
                <br />
                <label className="input-field" >
                    Email : <input type="text" onChange={(event)=>{setContact({...contact,email:event.target.value})}} />
                </label>
                <br />
                <label className="input-field" >
                    Mobile Number : <input type="text" onChange={(event)=>{setContact({...contact,mobilenumber:event.target.value})}} />
                </label>
                <br />
                <label className="input-field">
                    Orgname : <input type="text" onChange={(event)=>{setContact({...contact,orgname:event.target.value})}} />
                </label>
                    <br />
                <label  className="input-field">
                    message : <input type="textarea" onChange={(event)=>{setContact({...contact,message:event.target.value})}} />
                </label>
                <br />
                <button type="submit">submit</button>
                
            </form>
           </center>
    </div>
 )
}
export default PostApi