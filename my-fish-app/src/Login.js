import React, { useState } from 'react';

function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPasswordClose = () => {
    setShowForgotPassword(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLogin('');
    setPassword('');
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      {!loggedIn ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          <p>Hello, {login}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {!loggedIn && (
        <button onClick={() => setShowForgotPassword(true)}>Forgot Password</button>
      )}

      {showForgotPassword && (
        <div className="forgot-password-popup">
          <div className="forgot-password-content">
            <button onClick={handleForgotPasswordClose}>Close</button>
            <p>Relax &amp; try to remember your password</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
