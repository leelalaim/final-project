import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "../../src/index.css";

export const Hamburger = () => {
  const [closed, setClosed] = useState(false);
  // const showSettings = (event) => {
  //   event.preventDefault();
  // };

  // const close = () => {
  //     isOpen = { false };
  // }

  // const openClose = () => {
  //   if (closed === true) {
  //     isOpen = false;
  //     console.log("HELLO");
  //   }
  // };

  // var isMenuOpen = function(state) {
  //   return state.isOpen;
  // };

  // const isMenuOpen = (state) => {
  //   return state.isOpen;
  // };

  // const isOpen = false;

  return (
    <div className="hamburger">
      <Menu right>
        <Link
          // onClick={close()}
          to="/"
          id="home"
          className="menu-item"
        >
          Home
        </Link>
        <Link
          // onClick={}
          to="/projects"
          id="projects"
          className="menu-item"
        >
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
