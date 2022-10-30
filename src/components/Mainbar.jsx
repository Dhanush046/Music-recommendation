import React from "react";
import "./mainbar.css";

const Mainbar = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="top-left">
          <ul>
            <li className="same">
              {/* <img src="https://img.icons8.com/ios/50/000000/new.png" id="logo"/> */}
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
        <ul>
          <li className="same">
            <label htmlFor="listen" className="label">
              Listen Now
            </label>
          </li>
          <li className="same">
            <label htmlFor="fav" className="label">
              Add To Favourites
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mainbar;
