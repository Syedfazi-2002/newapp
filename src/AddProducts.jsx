import { useFormik } from "formik";
import React from "react";
import { useAddProductsMutation } from "./service/products";
function AddProduct(){
      var [npro] = useAddProductsMutation();
     var newProducts = useFormik({
        initialValues : {
            "id": 0,
            "title": "",
            "price": 0,
            "description": "",
            "category": "",
            "image": "",
            "rating": {
              "rate": 0,
              "count": 0
        }
      
        },
        onSubmit : (values)=>{
            npro(values).then(()=>{
                
            })
       }
     })
return (
    <div>
        <form onSubmit={newProducts.handleSubmit}>
            <input type="text" placeholder="id" name = "id" onChange={newProducts.handleChange} onBlur={newProducts.handleBlur} /> <br />
            <input type="text" placeholder="title" name = "title"  onChange={newProducts.handleChange} onBlur={newProducts.handleBlur}/> <br />
            <input type="text" placeholder="price" name="price" onChange={newProducts.handleChange} onBlur={newProducts.handleBlur}/> <br />
            <input type="text" placeholder="category" name="category" onChange={newProducts.handleChange} onBlur={newProducts.handleBlur}/> <br />
            <input type="text" placeholder="image" name="image" onChange={newProducts.handleChange} onBlur={newProducts.handleBlur}/> <br />
            <button type="submit">Add data</button>
        </form>
       
    </div>
)
}
export default AddProduct ;