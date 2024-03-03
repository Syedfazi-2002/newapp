import React from "react"
import { useGetAllProductsQuery } from "../servieces/Product";
function NewProducts(){
     var {data,isLoading} = useGetAllProductsQuery();
     console.log("hi")
     console.log(data)
  return (
    <div>
        <h1>Iam the product</h1>
        {
            data && data.map((product)=>{
                return (
                    <h1>{product.name}</h1>
                )
            })
        }
    </div>
  )
}
export default NewProducts;