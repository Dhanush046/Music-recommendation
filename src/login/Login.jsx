import React from "react";
import "./login.css";
const Login = () => {
  const eventformhandler = () => {
    console.log("hello");
  };
  return (
    <div className="main">
      <div className="left">
        <form className="form">
          <div className="login">
            <h1 className="loginname">Login</h1>

            <div className="form-group">
              <label htmlFor="email" className="em">
                E-mail:
              </label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="pw">
                Password:
              </label>
              <input type="password" name="password" id="password" />
            </div>
            <nav onClick={eventformhandler}>
              <ul>
                <li>
                  Login
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
