import Header from './services/shared/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (<>
    <div className="App">
      <Header></Header>
    </div>
    <div><Outlet></Outlet></div>
    </>
  );
}

export default App;
