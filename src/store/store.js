import { combineReducers, createStore } from "redux";
import CounterReducer from "./Reducers/counter.reducer";
import TodolistReducer from "./Reducers/todolist.reducer";
var finalReducer = combineReducers ({c:CounterReducer,t:TodolistReducer})

var store = new createStore(finalReducer)
export default store ; 