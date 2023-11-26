import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import CounterComponent from './Counter';
import TodolistComponent from "./Todolist"
function App() {
  return (
    <Provider store={store}>
<div className='mybox'>
   <h1>REact REdux....</h1>
   <CounterComponent></CounterComponent>
   <TodolistComponent></TodolistComponent>
</div>
</Provider>
  );
}

export default App;
