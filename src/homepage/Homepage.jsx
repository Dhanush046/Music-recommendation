import React from "react";
import "./homepage.css";
import SideBar from "../components/SideBar";

const Homepage = () => {
  return (
    <div className="home-page">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="right"></div>
    </div>
  );
};
export default Homepage;
