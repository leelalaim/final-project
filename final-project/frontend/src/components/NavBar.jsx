import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import { useRouteMatch, Link } from "react-router-dom";

// import '/hamburger-styling.css'

import '../../src/index.css'

export const NavBar = () => {
    // const showSettings = (event) => {
        
    //   }
        return (
          <Menu right>
            <a href="/" id="home" className="menu-item">Home</a>
            <a href="/about" id="about" className="menu-item">About</a>
            <a href="/projects" id="contact" className="menu-item">Projects</a>
            <a href="/upload" id="contact" className="menu-item">Upload</a>
            <a href="/signup" id="contact" className="menu-item">Sign Up!</a>
            {/* <a  to="/" onClick={ showSettings } className="menu-item--small">Settings</a> */}
          </Menu>
          
        );
  }


{/* <Menu right>
  <Link to="/" id="home" className="menu-item">Home</Link>
  <Link to="/about" id="about" className="menu-item">About</Link>
  <Link to="/projects" id="contact" className="menu-item">Projects</Link>
  <Link to="/upload" id="contact" className="menu-item">Upload</Link>
  <Link to="/signup" id="contact" className="menu-item">Sign Up!</Link>
  <Link  to="/" onClick={ showSettings } className="menu-item--small">Settings</Link>
</Menu> */}
