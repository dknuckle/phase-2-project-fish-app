import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FishGallery from './FishGallery';
import Home from './Home';
import NavBar from './NavBar';
import TankCalculator from './TankCalculator';
import fishData from './fishData.json';
import './App.css';
import Logo from './fishyy.jpg';

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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
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
    </BrowserRouter>
  );
}

export default App;
