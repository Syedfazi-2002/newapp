import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "../features/counter/counterSlice"
import todolistReducer from '../features/counter/todolist/todolistSlice'
export const store = configureStore({
  reducer: {
    c:CounterReducer,
    t:todolistReducer
  },
})