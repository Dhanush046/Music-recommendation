import React from "react";
import "./homepage.css";
import SideBar from "../components/SideBar";
import Mainbar from "../components/Mainbar";
// import { BrowserRouter } from "react-router-dom";
// import SearchBar from "../components/SearchBar";

const Homepage = () => {
  return (
    <>
      <div className="home-page">
        
        <SideBar />
      <Mainbar />
      </div>
    </>
  );
};
export default Homepage;
