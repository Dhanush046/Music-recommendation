import React from "react";
// import Rarrow from "./rightArrow.jpg";
import Rarrow from "../assets/rightArrow.jpg";

import "./searchBar.css";
function SearchBar() {
  let broseList = [
    "Podcast",
    "Tamil",
    "Hindi",
    "English",
    "Live Events",
    "New Releases",
    "Made For You",
    "Fresh Finds",
    "Workout",
    "At Home",
    "Sleep",
    "Travel",
  ];
  return (
    <div className="searchPage">
      <nav>
        <img src={Rarrow} alt="" />
        <div className="search">
          <input className="searchInput" type="text" placeholder="What do you want to listen to?" />
        </div>
      </nav>
      <body>
        <h1 id="H1">Browse all</h1>
        <div className="container2">
          {broseList.map((item, key) => {
            return (
              <div className="card" id={key}>
                {/* <h2 className="item">{item}</h2> */}
                <a className="item" href="/">{item}</a>
              </div>
            );
          })}
        </div>
      </body>
    </div>
  );
}

export default SearchBar;
