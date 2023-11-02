import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Planning(){
  var [flag,setFlag]=React.useState(false)
    var [data,setData]=React.useState(
        [
            {
                id: 1,
                title: 'Do I have to allow the use of cookies?',
                info:
                  'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
              },
              {
                id: 2,
                title: 'How do I change my My Page password?',
                info:
                  'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
              },
              {
                id: 3,
                title: 'What is BankID?',
                info:
                  'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
              },
              {
                id: 4,
                title: 'Whose birth number can I use?',
                info:
                  'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
              },
              {
                id: 5,
                title: 'When do I recieve a password ordered by letter?',
                info:
                  'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
              },
        ]
    )
    React.useEffect(function(){
      var y=data.map((x)=>{
          return {...x,status:false}
  
        })
        setData([...y])
   },[])
       function click(index){
          var temp = ([...data])
          temp[index].status=!temp[index].status
          setData([...temp])
       }
 return (
    <div  className="first-div">
        <h3 className="head">Qustions And Answers About Login</h3>
         {
            data.map((a,i)=>{
                return (
                      <div className="questions">
                           <h5 className="title">{a.title} <button className="button" id="btn" onClick={()=>{click(i)}}>
                            {a.status? <AiOutlineMinus/>:<AiOutlinePlus/>}
                            </button>
                            </h5>
                           <p className="paragraph">{a.status?a.info:a.info.slice(0,0)}</p>
                      </div>
                 
                )
            })
         }
    </div>
 )
}
export default Planning;