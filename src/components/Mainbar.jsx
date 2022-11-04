import React from "react";
import "./mainbar.css";
import { Link } from "react-router-dom";

const Mainbar = () => {
  return (
    <div className="main1">
      <div className="top">
        <div className="top-left">
          <ul>
            <li className="samea">
              <label htmlFor="new" className="lab">
                New Releases
              </label>
            </li>
            <li className="samea">
              <label htmlFor="shuffle" className="lab">
                Shuffle Play
              </label>
            </li>
            <li className="samea">
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
        {/* <div className="mid-text1"> */}
        <a href="/" className="a-text1">
          Listen Now
        </a>
        {/* </div> */}
        {/* <div className="mid-text2"> */}
        <a href="ha" className="a-text2">
          Add To Favourites
        </a>
        {/* </div> */}
      </div>
      <h2 className="recplay">Recently Played</h2>
      <div className="middle">
        <Card title={"Romantic"} />
        <Card title={"India's Best"} />
        <Card title={"Daily Mix"} />
        <Card title={"Your Top Mixes"} />
        <Card title={"Made For You"} />
        {/* {titles.map((prod, index) => {
          return (
            <div key={index}>
            <Card title={prod.title} dis={prod.dis} />
            </div>
          )
          })}  */}
      </div>
    </div>
  );
};
const titles = [
  { title: "Elevation", dis: "Sample" },
  { title: "Elevation", dis: "Sample" },
];
const Card = ({ title, dis }) => {
  return (
    <div className="same1">
      <h3 className="title">{title}</h3>
      <p>{dis}</p>
    </div>
  );
};
export default Mainbar;
