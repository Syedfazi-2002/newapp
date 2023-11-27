import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc,dec } from "./counterSlice";

function Counter (){
    var  { count }= useSelector (state =>state.c)
    var dispatch = useDispatch()
    console.log(count)
    return (
        <div className="box">
                <h1>Counter : {count}</h1>
                <button onClick={()=>{dispatch(inc())}}>Increment</button>
                <button onClick={()=>{dispatch(dec())}}>Decrement</button>
        </div>
    )
}
export default Counter ;