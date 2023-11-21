import React from "react"
import data from "./data";

function Shopping(){
  var [newdata,setNewdata] = React.useState(data);
   var [cart,setCart] = React.useState([])
   var [value,setValue] = React.useState(0)
  var [productinc,setProductinc] = React.useState (1)
  function handleshopping(name,index){
    setCart([...cart,name])
    setValue(value+1)
  }
  console.log(cart)
  function inc(){
    setProductinc(productinc+1)
  }
  function dec(){
   if(productinc>=1){
    setProductinc(productinc-1)
   }
  }
  function remove (ind){
    var temp = [...cart]
    setValue(value-1)
    temp.splice(ind,1)
    setCart(temp)
  }
return (
    <div>
          <nav class="navbar navbar-danger bg-danger">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">E-CART-SHOPPING </span>
            </div>
          </nav>
        <div className="container">
         <div className="main-container">
            {
               newdata.map((a,i)=>{
                return(
                 
                    <div className="small-container">
                        <div>{a.title}</div>
                        <div>{a.price}</div>
                        <img className="pic" src={a.image} alt="" width={70} /><br />
                        <button className="add-button" onClick={()=>{handleshopping(a,i)}}>Add to Cart</button>
                    </div>
                )
               })
            }
         </div>
         <div className="side-container">
             <h3>Add your Cart : {value}</h3>
             {
              cart.map((obj,i)=>{
                return(
                  <div className="cart-container">
                    <div>
                      <img className="cart-pic" src={obj.image} alt="" />
                    </div>
                    <div>{obj.title}</div>
                    <div>
                    <button className="button1" onClick={()=>{dec()}}>-</button> 
                    {productinc}
                    <button className="button2" onClick={()=>{inc()}} >+</button>
                    <button onClick={()=>{remove(i)}}>Remove</button>
                    </div>
                  </div>
                )
              })
             }
         </div>
        </div>
  </div>
)
}
export default Shopping;