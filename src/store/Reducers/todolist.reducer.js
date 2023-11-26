 const intialState = {
     todolist :["paybills","carwash","eatingfood","sleeping"]
 }
 function TodolistReducer(state=intialState,action){
      if(action.type==="ADDTODO"){
        return {todolist:[...state.todolist,action.payload]}
      }
      return state;
    }
 export default TodolistReducer;