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
    console.log("form is calling");
    e.preventDefault();
axios.post("http://localhost:4000/contact",contact)
.then((res)=>{
    console.log("after submit",res)
})

        // console.log("post created :",response.data)
}

 return(
    <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">
                    Full name :   <input type="text" onChange={(event)=>{setContact({...contact,fullname:event.target.value})}}/>
                </label>
                <br />
                <label htmlFor="">
                    Email : <input type="text" onChange={(event)=>{setContact({...contact,email:event.target.value})}} />
                </label>
                <br />
                <label htmlFor="">
                    Mobile Number : <input type="text" onChange={(event)=>{setContact({...contact,mobilenumber:event.target.value})}} />
                </label>
                <br />
                <label htmlFor="">
                    Orgname : <input type="text" onChange={(event)=>{setContact({...contact,orgname:event.target.value})}} />
                </label>
                    <br />
                <label htmlFor="">
                    message : <input type="textarea" onChange={(event)=>{setContact({...contact,message:event.target.value})}} />
                </label>
                <button type="submit">submit</button>
                
            </form>
    </div>
 )
}
export default PostApi