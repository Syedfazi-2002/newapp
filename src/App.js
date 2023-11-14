import logo from './logo.svg';
import './App.css';
import Table from './Sortin buttons';
import Genui from './Table2';
import Score from './Cricketscore';
import Todo from "./Todo"
import Boxes from './Checkbox';
import SelectingImages from './Gender';
import Radio from './Handling-Radio-button';
import Selecting from './Select-option';
function App() {
  return (
    <>
   
    <div className="App">
       <Table></Table>
    </div>
    
    <div className='second-component'>
      <Genui></Genui>
    </div>


    <div className='third-component'>
      <Score></Score>
    </div>

    <div className='fourt-component'>
      <Todo></Todo>
    </div>

    <div>

      <Boxes></Boxes>
    </div>

    <div>
      <SelectingImages></SelectingImages>
    </div>

    <div>
      <Radio></Radio>
    </div>

    <div>
      <Selecting></Selecting>
    </div>

    </>
    
  );
}

export default App;
