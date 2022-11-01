import React from "react";
// import Rarrow from "./rightArrow.jpg";
import Rarrow from "../assets/rightArrow.jpg";

import "./searchBar.css";
function SearchBar() {
  let broseList = [
    "Podcast",
    "Tamil",
    "Telugu",
    "English",
    "Live Events",
    "New Releases",
  ];
  return (
    <div className="searchPage">
      <nav>
        <img src={Rarrow} alt="" />
        <div className="search">
          <input className="searchInput" type="text" />
        </div>
      </nav>
      <body>
        <h1>Browse all</h1>
        <div className="container2">
          {broseList.map((item, key) => {
            return (
              <div className="card" id={key}>
                <h2 className="item">{item}</h2>
              </div>
            );
          })}
        </div>
      </body>
    </div>
  );
}

export default SearchBar;
