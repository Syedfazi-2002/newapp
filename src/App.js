import logo from './logo.svg';
import './App.css';
import Studentform from './Formvalidation';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <>
    <div className='todo'>
      <Todolist></Todolist>
      </div>



    <div className="myexperiment">
    
    <Counter start = {10} add={5}></Counter>
    <Counter start={100} add={20}></Counter>
    <Counter start={50} add={50}></Counter>

    </div>
    </>
  );
}

export default App;
