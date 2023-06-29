import React from "react";


function Login() {
    const handleLogin = (event) => {
      event.preventDefault();
      // Handle the login form submission
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  export default Login;