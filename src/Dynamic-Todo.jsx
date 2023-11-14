import React from "react";
function Dynamic(){
    var [data,setData]=React.useState(["he","who","remains"])

    function displayData(){
        var newInp = document.getElementById("d1").value
        console.log(newInp)
        setData([...data,newInp])
    }
return(
    <div>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add data
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title : Enter the data</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text"  id="d1"/>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={displayData}>Save changes</button>
      </div>
    </div>
  </div>
</div>
  <div className="render">
  {
    data.map((a)=>{
        return(
            <li>{a}</li>
        )
    })
   }
  </div>
    </div>
    
)
}
export default Dynamic;