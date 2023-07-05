import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import FishGallery from './FishGallery';
import Home from './Home';
import NavBar from './NavBar';
import TankCalculator from './TankCalculator';
import fishData from './fishData.json';
import logo from './logo.svg';
import './App.css';

function App() {
  const [fishes, setFishes] = useState(fishData.fish);

  const handleLike = (fishId) => {
    setFishes((prevFishes) =>
      prevFishes.map((fish) => {
        if (fish.id === fishId) {
          return { ...fish, likes: fish.likes + 1 };
        }
        return fish;
      })
    );
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/fish-gallery">
                <FishGallery fishData={fishes} handleLike={handleLike} />
              </Route>
              <Route exact path="/tank-calculator">
                <TankCalculator /> 
              </Route>
              <Route exact path="/">
                <Home /> 
              </Route>
            </Switch>
          </div>
        </header>
      </div>
  );
}

export default App;
