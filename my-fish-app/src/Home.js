import React, { useState } from 'react';

function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleForgotPasswordClose = () => {
    setShowForgotPassword(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => setShowForgotPassword(true)}>Forgot Password</button>

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