export function addTodo(newdata){
    return {type : "ADDTODO",payload:newdata}
}
export function IncCount(){
    return{type : "INC"}
}
export function DecCount(){
    return {type : "DEC"}
}