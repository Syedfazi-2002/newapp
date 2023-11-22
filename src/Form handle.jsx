import React from "react"
import { useFormik} from "formik";
import * as  Yup from "yup"
function FormHandling(){
    var [persondata,setPersondata] = React.useState([])
   var formData = useFormik({
    initialValues : {
        firstname : "",
        lastname  : "",
        age : "",
    },
    validationSchema:Yup.object({
      firstname : Yup.string().required("please Enter the first name ").min(5,"enter five letters only"),
      lastname : Yup.string().required("please Enter the last name ").min(5,"enter five letters only"),
      age : Yup.number().required("please Enter the age ").min(2,"enter below three ")
    }),
     onSubmit: (values)=>{
       setPersondata([...persondata,values])
    
    }
    
   })
   
return (
    
    <div>
    {console.log(formData)}
         <h1>Student data form </h1>

       <form action="" onSubmit={formData.handleSubmit}>
      
        <input type="text" name="firstname" onBlur={formData.handleBlur} onChange={formData.handleChange} /> <br />
        <div>
        <b>{ formData.touched.firstname && formData.errors.firstname}</b> 
        </div>
        <input type="text" name = "lastname"  onBlur={formData.handleBlur} onChange={formData.handleChange}/> <br />
        <div>
            <b>{ formData.touched.lastname && formData.errors.lastname}</b>
        </div>
        <input type="text" name="age"   onBlur={formData.handleBlur} onChange={formData.handleChange}/> <br />
        <div>
            <b>{ formData.touched.age && formData.errors.age}</b>
        </div>
        <button >submit </button>
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