import React, { useState, useEffect } from 'react';
import FishGallery from './FishGallery';
import Home from './Home';
import NavBar from './NavBar';
import TankCalculator from './TankCalculator';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
