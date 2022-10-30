import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="container">
      <div className="podcast">
      <img src="https://img.icons8.com/cute-clipart/64/000000/earbud-headphones.png" id="logo"/>
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
            <label htmlFor="search" className="sr lab">
              Search
            </label>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-trending-content-creator-tanah-basah-glyph-tanah-basah.png"
              id="logo"
            />
            <label htmlFor="trending" className="trend lab">
              Trending
            </label>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/wired/64/ffffff/musical-notes.png"
              id="logo"
            />
            <label htmlFor="Genre" className="gr lab">
              Genre
            </label>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/ffffff/external-album-essential-element-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
              id="logo"
            />
            <label htmlFor="album" className="al lab">
              Album
            </label>
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
            <label htmlFor="playlist" className="play lab">
              Playlist
            </label>
          </li>
          <li className="same">
            <img
              src="https://img.icons8.com/ios/50/ffffff/add-to-favorites--v1.png"
              id="logo"
            />
            <label htmlFor="favourites" className="fav lab">
              Favourites
            </label>
          </li>
          <li className="same">
          <img src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-most-recent-social-media-sbts2018-solid-sbts2018.png" id="logo"/>
            <label htmlFor="recent" className="rec lab">
              Recent
            </label>
          </li>
        </ul>
      </div>
      <div className="customize">
        <h2>Customize</h2>
        <ul>
          <li className="same">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/guest-male--v1.png" id="logo"/>
            <label htmlFor="account" className="acc lab">
              Account
            </label>
          </li>
          <li className="same">
          <img src="https://img.icons8.com/dotty/80/ffffff/window-settings.png" id="logo"/>
            <label htmlFor="settings" className="set lab">
              Settings
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
