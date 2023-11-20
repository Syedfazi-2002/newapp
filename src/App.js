import logo from './logo.svg';
import './App.css';
import UserRef from './Useref';
import ParentComponent from './ParentComp';

function App() {
  return (
    <div className="App">
      <UserRef></UserRef>

      <div className='parent'>
        <ParentComponent></ParentComponent>
      </div>
    </div>
  );
}

export default App;
