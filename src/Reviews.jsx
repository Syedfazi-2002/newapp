import React from 'react';
function Review(){
  var [index,setIndex]=React.useState(0)
    var [data,setData]=React.useState(
        [
            {
              id: 1,
              name: 'Pritam Ahire',
              job: 'web developer',
              image:
                'https://media.licdn.com/dms/image/C5103AQEOJPrf_VFaXA/profile-displayphoto-shrink_800_800/0/1565340799903?e=2147483647&v=beta&t=yvERZWmYhY_7ez_4KmHhpXzoScWGRGLOdvECA2TKixo',
              text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
            },
            {
              id: 2,
              name: 'Srinivas',
              job: 'web designer',
              image:
              "https://cdn.theorg.com/2b267654-371a-4e38-b1b6-3b9b7b41bd6e_thumb.jpg",
              text:
                'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
            },
            {
              id: 3,
              name: 'Sangeetha',
              job: 'intern',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJL4VCOgsX0nJJzSQuRmj1bMjdAouJi51eg&usqp=CAU',
              text:
                'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
            },
            {
              id: 4,
              name: 'bill anderson',
              job: 'the boss',
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
              text:
                'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
            },
          ]       
    )
      function right(){
        
        if(index<data.length-1){
          setIndex(index+1)
        }
        else{
          setIndex(0)
        }
      }
     function back(){
      if(index===0){
        setIndex(data.length-1)
      }
      else{
        setIndex(index-1)
      }
     }
     function suprise(){
      if(index<data.length){
         setIndex(index+1)
      }
      else{
        setIndex(0)
      }
    }
return (
            <div>
             <center>
              <h1>Edupoly Reviews</h1>
                <hr  className="hr-line" />
                <div className="page">
                <center>
                         <img className='photo' src={data[index].image} alt="" width={100} />
                         <h3 className='name'>{data[index].name}</h3>
                         <h4 className='job'>{data[index].job}</h4>
                         <p className='information'>
                          {data[index].text}
                         </p>
                         <span className='backward'>
                         <i  class="bi bi-chevron-compact-left" onClick={()=>{back()}}></i>
                         </span>
                         <span>
                         
                         <i className='forward' class="bi bi-chevron-compact-right"  onClick={()=>{right()}}></i>
                         </span> <br />
                         <button className='button' onClick={()=>{suprise()}} >Suprise Me</button>
                 </center>
                </div>
             </center>
            <div>
              
             </div>
          </div>
)
}
export default Review ;

