import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="container1">
      <div className="podcast">
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/earbud-headphones.png"
          id="logo"
        />
        <h3>DM-USIC</h3>
      </div>
      <div className="menu">
        <h2>Menu</h2>

        <ul>
          <li className="same">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png"
              id="logo"
            />
            <a href="/search" className="same5">
              Search
            </a>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-trending-content-creator-tanah-basah-glyph-tanah-basah.png"
              id="logo"
            />
            <a href="/" className="same5">
              Trending
            </a>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/wired/64/ffffff/musical-notes.png"
              id="logo"
            />
            <a href="/" className="same5">
              Genre
            </a>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/ffffff/external-album-essential-element-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
              id="logo"
            />
            <a href="/" className="same5">
              Album
            </a>
          </li>
        </ul>
      </div>
      <div className="library">
        <h2>Library</h2>
        <ul>
          <li className="same">
            <img
              src="https://img.icons8.com/ios/50/ffffff/smart-playlist.png"
              id="logo"
            />
            <a href="/" className="same5">
              Playlist
            </a>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/ios/50/ffffff/add-to-favorites--v1.png"
              id="logo"
            />
            <a href="/" className="same5">
              Favourites
            </a>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-most-recent-social-media-sbts2018-solid-sbts2018.png"
              id="logo"
            />
            <a href="/" className="same5">
              Recent
            </a>
          </li>
        </ul>
      </div>
      <div className="customize">
        <h2>Customize</h2>
        <ul>
          <li className="same">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/guest-male--v1.png"
              id="logo"
            />
            <a href="/" className="same5">
              Setting
            </a>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/dotty/80/ffffff/window-settings.png"
              id="logo"
            />
            <a href="/" className="same5">
              Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
