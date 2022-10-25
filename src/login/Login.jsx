import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="left">
        <form>
          <div className="login">
            <h1>Login</h1>

            <div className="form-group">
              <label htmlFor="email">email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="login"/>
          </div>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Login;
