import React from "react"
function Shopping(){
    var [num,setNum]=React.useState(0)
    var [data,setData]=React.useState(
        [
            {
              id: 1,
              title: 'Samsung Galaxy S7',
              price: 599.99,
              img: "https://www.refurbished.store/cache/images/galaxy-s7-edge_600x600_BGresize_16777215-tj.png",
              amount: 1,
            },
            {
              id: 2,
              title: 'google pixel ',
              price: 499.99,
              img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/g/3/-original-imaggbrccwsnygar.jpeg?q=70",
              amount: 1,
            },
            {
              id: 3,
              title: 'Xiaomi Redmi Note 2',
              price: 699.99,
              img :"https://guide-images.cdn.ifixit.com/igi/RP3RqUqT2jQ3HRZP.medium",
              amount: 1,
            },
          ]
          
    )
     React.useEffect(()=>{
      var y = data.map((x)=>{
        return{...x,status:false}
      })
      setData([...y])
     },[])

    function remove(index){
     var temp = [...data]
     temp.splice(index,1)
     setData(temp)
    }
    function increment(index){     
     if(index<data.length-1){
        setNum(num+1)
     }
    }
    function decrement(index){
        if(index>1){
            setNum()
        }
        else{
            setNum(num-1)
        }
        }
        function clear(index){
            var temporary = [...data]
            temporary.splice(index,3)
            setData(temporary)
        }
        function reduce(){
            var temp = [...data]
            temp.reduce((a,b)=>{
                return a+b
            },0)
            console.log(temp)
        }
return(
    <div>
    <div className="nav-bar"><h1 className="head-nav">Use Reducer</h1> <span className="nav-logo"><i  class="bi bi-house-lock"></i></span></div>
      <div>
       <center>
        <h1 className="head">YOUR MOBILES</h1>
        {
            data.map((a,i)=>{
                console.log(a)
                return (
                    <div className="main-container">
                        <div className="kart">
                            <div className="item-data">
                                <img className="photo left-side" src={a.img} alt=""/>
                                <div className="right-side">
                                    <h4 className="title">{a.title}</h4>
                                    <h4 className="price"><i class="bi bi-currency-dollar"></i>{a.price}</h4>
                                    <p className="remove" onClick={()=>{remove(i)}}>remove</p>
                                </div>
                            </div>
                            <div className="button-up-down">
                                <i class="bi bi-chevron-compact-up" onClick={()=>{reduce()}}></i>
                                {num}
                                <i class="bi bi-chevron-compact-down" onClick={()=>{increment(a,i)}}></i>
                            </div>   
                        </div>
                    </div>
                    
                )
            })
        }

        <hr/>
        <h4>Total</h4>
        
        <button onClick={()=>{clear()}}>Clear Shopping</button>
       </center>
      </div>
    </div>
)
}
export default Shopping;