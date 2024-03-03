import React from "react";
import { useDeleteProductsMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from "./service/products";
import { useNavigate } from "react-router-dom";
function Products(){
   var {data} = useGetAllProductsQuery();
   var [del] = useDeleteProductsMutation();
   var [delpro] = useLazyGetAllProductsQuery();
   var navi = useNavigate();
   console.log(data)
   function deleteProducts (id){

     del(id).then((res)=>{
        delpro();
     })
   }
   function editProduct(id){
        navi(id)
   }
 return (
    <div>
        <h1>products...</h1>
        <div className="main-container">
        {
           data && data.map((obj)=>{
                    return (
                        <div className="small-container">
                            <h6>{obj.title}</h6>
                            <img src={obj.image} alt="" width={100} /><br />
                            <button onClick={()=>deleteProducts(obj.id)}>del</button>
                            <button onClick={()=>{editProduct(obj.id)}}></button>
                        </div>
                    )
            })
        }
        </div>
    </div>
 )
}
export default Products;