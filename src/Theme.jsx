import React from "react"
import {useEffect,useState} from "react"
import moment from "moment"
function LightDark(){
    var [theme,setTheme]=React.useState("light-theme")
    var [data,setData]=React.useState([
        {
            id: 1,
            title: 'the WET Codbase',
            date: new Date(2020, 9, 4),
            length: 11,
            snippet: `Come waste your time with me`,
          },
          {
            id: 2,
            title: 'goodby, clean code',
            date: new Date(2019, 10, 22),
            length: 5,
            snippet: `Let clean code guide you. Then let it go.`,
          },
          {
            id: 3,
            title: 'my decade in review',
            date: new Date(2018, 7, 11),
            length: 5,
            snippet: `A personal reflection.`,
          },
          {
            id: 4,
            title: 'what are the react team principles',
            date: new Date(2015, 5, 4),
            length: 5,
            snippet: `UI Before API.`,
          }
        
    ])
   const changingLight = ()=>{
    
        if(theme==="light-theme"){
            setTheme("dark-theme")
        }
        else{
            setTheme("light-theme")
        }
    }
   
    console.log(theme)
    return (
        <div className="main-container">
        
         <h1>OverReactor</h1>
          
            <i class="bi bi-toggle-on" style={{fontSize:'40px'}} onClick={()=>{changingLight()}} ></i>
           <i class="bi bi-toggle-off"  style={{fontSize:'40px'}} onClick={()=>{changingLight()}} ></i>
            {
                data.map((a)=>{
                    return (
                        <div>
                            <h3>{a.title}</h3>
                            <span>{moment(a.date).format(" dddd Do,YYYY")}</span>
                            <p>{a.snippet}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default LightDark;