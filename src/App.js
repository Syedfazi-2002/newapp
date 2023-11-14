import logo from './logo.svg';
import './App.css';
import Dynamic from './Dynamic-Todo';
import Onkeyup from './Input';
import Data from './Inp-2';
function App() {
  return (
    <div>
  
    <div className="App">
    <Dynamic></Dynamic>
    </div>

    <div>
      <Onkeyup></Onkeyup>
    </div>

    <div>
      <Data></Data>
    </div>
    </div>
  );
}

export default App;
