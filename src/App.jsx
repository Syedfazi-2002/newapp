import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todolist from './Todolist';
import Todo from './Todo';
import List from './List';

function App() {
  
  return (
    <div className='parent' >
      
      <h3>Todolist parent</h3>
     
         <Todolist></Todolist>
         <List></List>
    </div>
  );
}

export default App;
