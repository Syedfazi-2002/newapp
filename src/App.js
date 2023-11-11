import logo from './logo.svg';
import './App.css';
import FirstComponent from './Comp-1';
import Table from './Comp-2';
import Dynamic from './Comp-3';
import DynamicTable from './Dynamic';

function App() {
  return (
    <div className="App">
    
    <div className='first'>
    <FirstComponent ></FirstComponent>
    </div>
     
     <div className='second'>
      <Table></Table>
     </div>
     <div  className='third'>
      <Dynamic></Dynamic>
     </div>
     <div  className='fourth'>
      <DynamicTable></DynamicTable>
     </div>

    </div>
  );
}

export default App;
