import React from "react"
function Pricing(){
    var [value,setValue]=React.useState()
    var [data,setData]=React.useState([
        {
            name:'idly',
            price:20,
            quantity:0
        },
        {
            name:'dosa',
            price:40,
            quantity:0
        }
    ])
    function handle(e){
      setData([{...data, quantity:e.target.value}])
      console.log(data)
    }
    return (
        <table border="1px solid black">
            <thead>
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
            </thead>
            <tbody>
                {
                    data.map((a)=>{
                        return (
                            <tr>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>
                                    <input type="text"  onChange={handle} />
                                </td>
                                <td>{a.price*a.quantity}</td>
                                
                               
                            </tr>
                            
                        )
                    })
                }
            </tbody>
            <tfoot>
               <th colSpan="4" >total</th>
            </tfoot>
        </table>
    )
}
export default Pricing;