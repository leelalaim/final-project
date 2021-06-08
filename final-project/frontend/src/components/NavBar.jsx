import React from 'react'
import { slide as Menu } from 'react-burger-menu';
// import { FaBars } from "react-icons/fa";

// import '/hamburger-styling.css'

import '../../src/index.css'

export const NavBar = () => {
    const showSettings = (event) => {
        
      }
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
          <Menu right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
          
        );
  }



