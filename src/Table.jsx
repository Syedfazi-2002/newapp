import React from "react";
function Component(){
    var [students,setStudents] =React.useState([
        {
          firstname:'ravi',
          lastname:'sastri',
          gender:'male'
        },
        {
          firstname:'sachin',
          lastname:'tendulkar',
          gender:'male'
        },
        {
          firstname:'mithali',
          lastname:'raj',
          gender:'female'
        },
        {
          firstname:'Rohit',
          lastname:'Sharma',
          gender:'male'
        },
        {
          firstname:'Smriti',
          lastname:'Mandhana',
          gender:'female'
        },
        {
          firstname:'Virat',
          lastname:'Kohli',
          gender:'male'
        },
      ])
 return  (
    <div className="main-container">
        {
            students.map((a)=>{
                return (
                    <div style={{ margin: "10px",textAlign:"center", border:"1px solid black",width:"200px",height:"50px"}}>
                        {a.gender==="male" && <i class="bi bi-gender-male h1"></i>}
                        {a.gender==="female" && <i class="bi bi-gender-female h1"></i>}

                        <div>
                            {a.firstname}{a.lastname}
                        </div>
                    </div>

                )
            })
        }
    </div>
 )
}
export default Component;