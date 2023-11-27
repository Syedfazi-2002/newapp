import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todolist : ["paybills","carloans","waterbills","currentbills"]
}
export const todolistSlice = createSlice ({
            name : "todolist",
            initialState ,
            reducers : {
                addtodo : (state,action)=>{
                    state.todolist.push(action.payload)
                },
                deltodo : (state,action)=>{
                    state.todolist.splice(action.payload,1)
                }
            }
})
export var {addtodo,deltodo} = todolistSlice.actions

var todolistReducer = todolistSlice.reducer ;
export default todolistReducer;
