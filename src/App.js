import logo from './logo.svg';
import './App.css';
import Shopping from './ShoppingCart';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DynamicArray from './controlled';
function App() {
  return (
    <div className="mybox">
      {/* <Shopping></Shopping> */}

      <DynamicArray></DynamicArray>
      
    </div>
  );
}

export default App;