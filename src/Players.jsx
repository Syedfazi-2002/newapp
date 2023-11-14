import React from "react"
function TeamIndia(){
 var [team,setTeam]=React.useState(["rohitSharma","shubmanGill","viratKohli","KlRahul","ShreyasIyer","SuryakumarYadav","RavindraJadeja","KuldeepYadav","JaspritBhumrah","MohamadShami","MohamadSiraj"])
 var [team2,setTeam2]=React.useState([])
 function value(a,index){
   var temp = [...team]
//    var i = temp.indexOf()
      temp.splice(index,1)
      console.log(temp.splice(index,1))
      setTeam(temp)
      setTeam2([...team2,temp.splice(index,1)])
      
 }
 return (
    <div className="container">

        <div className="main-container">
            <h3>Team India players</h3>
            {
                team.map((a,i)=>{
                    return (
                        <li onClick={()=>{value(a,i)}}>{a}</li>
                    )
                })
            }
        </div>

        <div className="second-container">
            <h3>un selected team</h3>
            {
                team2.map((a)=>{
                    return (
                        <li >{a}</li>
                    )
                })
            }
        </div>
    </div>
 )
}
export default  TeamIndia;