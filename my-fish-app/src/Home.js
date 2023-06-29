import React, { useState } from "react";
import Login from './Login';


function Home() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div>
            <h1>Knuckles's Fish Gallery</h1>
            <button onClick={() => setShowLogin(true)}>Login</button>

      {showLogin && (
        <div className="login-popup">
          <div className="login-content">
            <button onClick={() => setShowLogin(false)}>Close</button>
            <Login />
          </div>
        </div>
      )}
        </div>
    )
};

export default Home;