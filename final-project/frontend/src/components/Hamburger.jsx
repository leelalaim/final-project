import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "../../src/index.css";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuStateChange = (state) => {
    setIsOpen(state.isOpen);
  }

  const closeMenu = (e) => {
    setIsOpen(false);
  }

  return (
    <div className="hamburger">
      <Menu 
        isOpen={isOpen}
        onStateChange={onMenuStateChange}
        right
      >
        <Link
          onClick={closeMenu}
          to="/"
          id="home"
          className="menu-item"
        >
          Home
        </Link>
        <Link
          onClick={closeMenu}
          to="/projects"
          id="projects"
          className="menu-item"
        >
          Projects
        </Link>
        <Link 
          onClick={closeMenu}
          to="/upload" 
          id="upload"
          className="menu-item"
        >
          Upload
        </Link>
        <Link 
          onClick={closeMenu}
          to="/about" 
          id="about" 
          className="menu-item"
        >
          About
        </Link>
        <Link 
          onClick={closeMenu}
          to="/login" 
          id="signup" 
          className="menu-item"
        >
          Sign In!
        </Link>
        <Link 
          onClick={closeMenu}
          to="/signup" 
          id="signup" 
          className="menu-item"
        >
          Sign Up!
        </Link>
      </Menu>
    </div>
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
