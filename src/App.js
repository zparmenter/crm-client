import React from 'react';
import Directions from './config/directions';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Directions />
    </div>
  );
}

export default App;


