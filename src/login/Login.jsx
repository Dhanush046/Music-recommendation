import React from "react";
import "./login.css";
import logo1 from "../assets/arr.jpeg";
import logo2 from "../assets/maestro.jpeg";
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
              <label htmlFor="email" className="em">E-mail:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="pw">password:</label>
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
        <div className="logoarr">
          <img src={logo1} className="logo1" alt="logo1" />
        </div>
        <div className="logoir">
          <img src={logo2} className="logo2" alt="logo2" />
        </div>
        <h2 className="q1">Words make heart light music makes your soul light</h2>
      </div>
    </div>
  );
};

export default Login;
