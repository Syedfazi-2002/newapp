import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Reusing from './Counter-props';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <div>
      <Reusing start={1} add={10}></Reusing>
      <Reusing start={10} add={100}></Reusing>
      <Reusing start={500} add={50}></Reusing>
      </div>
    </div>
  );
}

export default App;
