import React from "react";
import "./login.css";
import logo from "../assets/music.jpg"
const Login = () => {
  const eventformhandler = () => {
    console.log("hello")
  }
  return (
    <div className="main">
      <div className="left">
        <form className="form">
          <div className="login">
            <h1 className="loginname">Login</h1>

            <div className="form-group">
              <label htmlFor="email">email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <nav onClick={eventformhandler}>
              <ul>
                <li>
                  submit
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
      <div className="right">
        <img src={logo} className="logo1" alt="logo" />
      </div>
    </div>
  );
};

export default Login;
