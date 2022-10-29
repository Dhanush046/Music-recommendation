import React from "react";
import "./SideBar.css";
function SideBar() {
  return (
    <div className="container">
      <div className="podcast">
        <img
          id="logo"
          src="https://liveblogspot.com/wp-content/uploads/2016/05/Logo-design-Melbourne-1000x600.jpg"
          alt="logo"
        />
        <p>PodCaster</p>
      </div>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          <li className="same">
            {" "}
            <img
              id="logo"
              src="https://liveblogspot.com/wp-content/uploads/2016/05/Logo-design-Melbourne-1000x600.jpg"
              alt="logo"
            />
            <p>PodCaster</p>
          </li>
          <li className="same">
            <img
              id="logo"
              src="https://liveblogspot.com/wp-content/uploads/2016/05/Logo-design-Melbourne-1000x600.jpg"
              alt="logo"
            />
            <p>PodCaster</p>
          </li>
          <li className="same">
            <img
              id="logo"
              src="https://liveblogspot.com/wp-content/uploads/2016/05/Logo-design-Melbourne-1000x600.jpg"
              alt="logo"
            />
            <p>PodCaster</p>
          </li>
          <li className="same">
            <img
              id="logo"
              src="https://liveblogspot.com/wp-content/uploads/2016/05/Logo-design-Melbourne-1000x600.jpg"
              alt="logo"
            />
            <p>PodCaster</p>
          </li>
          <li className="same">
            <img
              id="logo"
              src="https://liveblogspot.com/wp-content/uploads/2016/05/Logo-design-Melbourne-1000x600.jpg"
              alt="logo"
            />
            <p>PodCaster</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
