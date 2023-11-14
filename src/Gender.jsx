import React from "react";
function SelectingImages(){
    var [gender,setGender]=React.useState([])
   function handle(e){
    setGender(e.target.value)
   }
   console.log(gender)
    return (
        <div className="gender-div">
            <input type="radio" value="male" name = "gender" onChange={handle} />: Male  &nbsp;&nbsp;
            <input type="radio" value="female"  name="gender" onChange={handle}/>:Female   &nbsp;&nbsp;<br />
            { gender==="male"&& <img width="300px" src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-658.jpg?w=1060&t=st=1676186590~exp=1676187190~hmac=f0663d518cdd991b2c733bcb6cee3940e16c5a7e3bf1bcc9895f48c4e1ee960c" />}
            {gender==="female"&&<img width="300px" src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png" />}
        </div>
    )

}
export default SelectingImages;