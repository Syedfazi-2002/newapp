import logo from './logo.svg';
import './App.css';
import Todolist from './Todo';
import Add from './Addition';
import CalculatorData from './Calculator';
function App() {
  return (
    <div className="App">
        <Todolist></Todolist>
        <Add></Add>
        <CalculatorData></CalculatorData>
    </div>
  );
}

export default App;
