import AddProduct from './AddProducts';
import './App.css';
import EditProduct from './EditProduct';
import Products from './Products';

function App() {
  return (
    <div className="App">
       <AddProduct></AddProduct>
      <Products></Products>
      <EditProduct></EditProduct>
    </div>
  );
}

export default App;
