import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Countries() {
  var [country, setCountry] = React.useState([])
  var [loading, setLoading] = React.useState(true)
  var [grid, setGrid] = React.useState(true)
  useEffect(() => {
    axios.get("https://restcountries.com/v3/all")
      .then((res) => {
        setCountry(res.data)
        setLoading(false)
        setGrid(false)
      })
  }, [])
  console.log(country)

  function sortas() {
    setCountry(parameter => {
      var temp = [...parameter].sort((a, b) => {
        if (a.name.common > b.name.common) {
          return 1
        }
        if (a.name.common < b.name.common) {
          return -1
        }
        else {
          return 0
        }
      })
      return temp;
    })
  }
  function sortas2() {
    setCountry(param => {
      var temp2 = [...param].sort((a, b) => {
        if (a.name.common < b.name.common) {
          return 1
        }
        if (a.name.common > b.name.common) {
          return -1
        }
        else {
          return 0
        }
      })
      return temp2;
    })
  }
  function clickList(){
    alert("h1")
  }

 
  return (
    <div>
      <h1 className="nav" >Countries</h1>
      {
        loading && (
          <img className="loading" src=" https://www.downgraf.com/storage/2019/05/Loader-animation-principle-freebie.gif " alt="" />)
      }


      <b className="ascending" onClick={() => sortas()} >Ascending</b>
      <b className="decending" onClick={() => sortas2()}>descending</b>

      <span className="genlist"> <i class="bi bi-list" ></i>  </span>
      <span className="gengrid"> <i class="bi bi-grid-3x3-gap-fill" onClick={() => { clickList() }} ></i> </span>
      <hr />
     
      <ul className="flags" >

        {
               country.map((a) => {
                return (
                  < li>
                    <h1>{a.name.common}</h1>
                    <img src={a.flags[0]} alt="" width={300} />
                    <h1>{a.population}</h1>
                  </li>
                )
              })
        }
      </ul>
    </div>
  )
}
export default Countries ;