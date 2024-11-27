import  React from "react"
import { useGetAllProductsQuery } from "../product";
function NewProducts(){
    var {data,isLoading} = useGetAllProductsQuery()
    console.log(data)
  return (
    <div className="main-box">
        <h1>fake product</h1>
       <div className="main-box">
                {
                    data&&data.map((item)=>{
                        return (
                            <li>{item.title}</li>
                        )
                    })
                }
       </div>
    </div>
  )
}
export default NewProducts;