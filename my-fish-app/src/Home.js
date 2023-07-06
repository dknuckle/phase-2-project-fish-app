import React, { useState } from 'react';
import Login from './Login';

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='home'>
      <h1>Welcome to the Home Page</h1>
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
  );
}

export default Home;