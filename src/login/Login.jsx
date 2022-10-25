import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="left">
        <div className="login"></div>
        <div className="email">
          <div className="emailwrapper">
            <div className="emaillabelwrap">
              <label htmlFor="email1">email</label>
              <input type="email" className="email1" placeholder="email" />
            </div>
            <div className="pwlabelwrapper">
              <label htmlFor="pw1">password</label>
             <input type="password" className="pw" placeholder="password" />
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Login;
