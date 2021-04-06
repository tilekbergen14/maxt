import React from "react";
import { AccountCircle, Search } from "@material-ui/icons";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="bg-black">
      <div className="navbar">
        <div className="flex">
          <div className="logo">
            <h3>MaxT</h3>
          </div>
          <div className="auth flex justify">
            <AccountCircle />
            <p className="media-voff">Sign in</p>
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>News</li>
            <li>Sport</li>
            <li>Travel</li>
            <li>Culture</li>
          </ul>
        </div>
        <div className="input">
          <input type="text" className="media-voff" placeholder="search" />
          <Search className="search-icon" />
        </div>
      </div>
    </div>
  );
}
