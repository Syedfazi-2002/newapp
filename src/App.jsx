import './index.js';
import {Outlet,Link} from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
     <h1>Syed Fazil</h1>  
   <Link to='/Counter'>Counter</Link>&nbsp;&nbsp;
   <Link to='/Todolist'>Todolist</Link>&nbsp;&nbsp;
   <Outlet></Outlet>
    </div>
  )
}

export default App;
