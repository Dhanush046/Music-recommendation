import React from "react";
import "./homepage.css";
import SideBar from "../components/SideBar";
import Mainbar from "../components/Mainbar";

const Homepage = () => {
  return (
    <div className="home-page">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="home-bar">
        <Mainbar />
      </div>
    </div>
  );
};
export default Homepage;
