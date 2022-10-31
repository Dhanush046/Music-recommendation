import React from "react";
import "./mainbar.css";

const Mainbar = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="top-left">
          <ul>
            <li className="same">
              <label htmlFor="new" className="lab">
                New Releases
              </label>
            </li>
            <li className="same">
              <label htmlFor="shuffle" className="lab">
                Shuffle Play
              </label>
            </li>
            <li className="same">
              <label htmlFor="live-pod" className="lab">
                Live Podcast
              </label>
            </li>
          </ul>
        </div>
        <div className="top-right">
          <ul>
            <li>
              <label htmlFor="upgrade" className="lab">
                Upgrade Plan
              </label>
            </li>
            <li>
              <label htmlFor="user" className="lab">
                User Name
              </label>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="head">TRENDING</h2>
      <div className="mid">
        <h2>On Purpose</h2>
        <div className="mid-text1">
          <a href="ha" className="a-text">
            Listen Now
          </a>
        </div>
        <div className="mid-text2">
          <a href="ha" className="a-text">
            Add To Favourites
          </a>
        </div>
      </div>
      <h2 className="recplay">Recently Played</h2>
      <div className="middle">
        <div className="same1">
          <h3 className="title">Elevation</h3>
          <h5 className="sub">Ani</h5>
        </div>
        <div className="same2">
          <h3 className="title">Daily Podcast</h3>
        </div>
        <div className="same3">
          <h3 className="title">Daily Show</h3>
        </div>
        <div className="same4">
          <h3 className="title">Mindset</h3>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
