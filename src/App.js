import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/counter/todolist/todolist';

function App() {
  return (
    <div className="App">
         <Counter></Counter>
         <Todolist></Todolist>
    </div>
  );
}

export default App;
