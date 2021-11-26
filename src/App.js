import React from 'react';
import Directions from './config/directions';
import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Link to={'/'}>
        <h1>Home</h1> 
      </Link>
      <Directions />
    </div>
  );
}

export default App;


