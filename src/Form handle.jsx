import React from "react"
import { useFormik} from "formik";
import * as  Yup from "yup"
import axios from "axios";
function FormHandling(){
    var [persondata,setPersondata] = React.useState([])
   var formData = useFormik({
    initialValues : {
        firstname : "",
        lastname  : "",
        gender : "",
        age : "",
        password : "",
        username : ""
    },
    validationSchema:Yup.object({
       firstname : Yup.string().required("please Enter the first name ").min(5,"enter five letters only"),
       lastname : Yup.string().required("please Enter the last name ").min(5,"enter five letters only"),
        
      password : Yup.string().required("Give the strong password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,"please enter strong password.."),

      username : Yup.string().required("please enter the user name").test({
        name : "CheckUserNAmeAsyncronus",
        message : "already user has been taken"
      }).test((values,a)=>{
        axios.get("https://jsonplaceholder.typicode.com/users?username = ${value}")
        .then((res)=>{

        })

      }),

       age : Yup.number().required("you want marraige ? ").test({
                   name : "GenderBasedAgeValidation",
                   age : "You dosent have proper age",
                   test :((value,a)=>{
                    console.log(a)
                    if(a.parent.gender==="male" && value<21){
                      return true
                    }
                   if(a.parent.gender === "female" && value<18){
                      return true
                   }
                   return true;
                   })
       })
    }),
     onSubmit: (values)=>{
      console.log(values)
       setPersondata([...persondata,values])   
    }
    
   })
   
return (
    
    <div>
    {console.log(formData)}
         <h1>Student data form </h1>

       <form action="" onSubmit={formData.handleSubmit}>
      
        <input type="text" placeholder="firstname" name="firstname" onBlur={formData.handleBlur} onChange={formData.handleChange} /> <br />
        <div>
        <b>{ formData.touched.firstname && formData.errors.firstname}</b> 
        </div>
        <input type="text" placeholder="lastname" name = "lastname"  onBlur={formData.handleBlur} onChange={formData.handleChange}/> <br />
        <div>
            <b>{ formData.touched.lastname && formData.errors.lastname}</b>
        </div>
        <input type="radio" value="male" name = "gender" onBlur={formData.handleBlur} onChange={formData.handleChange} /> : male
        <input type="radio" value="female" name="gender" onBlur={formData.handleBlur} onChange={formData.handleChange}/> : female
        <br />
        <input type="text" placeholder="age" name="age"   onBlur={formData.handleBlur} onChange={formData.handleChange}/> <br />
        <div>
            <b>{ formData.touched.age && formData.errors.age}</b>
        </div>
        <input type="text" placeholder="pasword" name="password" onBlur={formData.handleBlur}  onChange={formData.handleChange}/><br />
        <div>
          <b>{formData.touched.password && formData.errors.password}</b>
        </div>
        <input type="text" placeholder="user" name = "user" onBlur={formData.handleBlur} onChange={formData.handleChange}/> <br />
        <div>
           <b>{formData.touched.user && formData.errors.user}</b>
        </div>
        <button type="submit">submit </button>
       </form>
          <ul className="main-container">
            {
              persondata.map((information)=>{
                return (
                    <li className="small-container">
                        <h3>{information.firstname}</h3>
                        <h3>{information.lastname}</h3>
                        <h3>{information.age}</h3>
                    </li>
                )
              })
            }
          </ul>
    
    </div>
)
}
export default FormHandling;