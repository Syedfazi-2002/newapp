import React from "react"
import IplTeam from "./Ipl-teams";
function Reuse(){
    const [allteams, setAllteams] = React.useState([
        {
          teamname:'Mumbai Indians',
          players:[
            'Rohit',
            'surya',
            'kishan',
            'bhumra',
            'david'
          ]
        },
        {
          teamname:'Royal Challengers Bengaluru',
          players:[
            'Faf',
            'Virat',
            'DK',
            'Maxi',
            'Siraj'
          ]
        },
        {
          teamname:'Sunrisers Hyderabad',
          players:[
            'Kane Williamson',
            'Manish',
            'Bhuvi',
            'Warner',
            'Karan'
          ]
        },
        {
          teamname:'Chennai Super Kings',
          players:[
            'Dhoni',
            'Raina',
            'Jadeja',
            'Rayudu',
            'Ben Stokes'
          ]
        }
      ])

      return(
        <div className="main-container">
            <h2>Ipl Team Selecting</h2>
            {
                allteams.map((team)=>{
                    return(
                        <IplTeam  players = {team.players} tname={team.teamname}></IplTeam>
                    )
                })
            }
        </div>
       
      )
}
export default Reuse;