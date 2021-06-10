import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import "../../src/index.css";

export const Hamburger = () => {
  // const showSettings = (event) => {};
  return (
    <Router>
      <div className="hamburger">
        <Menu right>
          <Link to="/" id="home" className="menu-item">
            Home
          </Link>
          <Link to="/projects" id="projects" className="menu-item">
            Projects
          </Link>
          <Link to="/upload" id="upload" className="menu-item">
            Upload
          </Link>
          <Link to="/about" id="about" className="menu-item">
            About
          </Link>
          <Link to="/signup" id="signup" className="menu-item">
            Sign Up!
          </Link>
        </Menu>
      </div>
    </Router>
  );
};

{
  /* <Menu right>
<a href="/" id="home" className="menu-item">Home</a>
<a href="/about" id="about" className="menu-item">About</a>
<a href="/projects" id="contact" className="menu-item">Projects</a>
<a href="/upload" id="contact" className="menu-item">Upload</a>
<a href="/signup" id="contact" className="menu-item">Sign Up</a>
{/* <a  to="/" onClick={ showSettings } className="menu-item--small">Settings</a>
</Menu> */
}
