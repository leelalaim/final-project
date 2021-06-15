import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components/macro"
import logo from "../assets/logo.png"
import { Login } from "../components/Login"

import "../../src/index.css";

const LogoHamburger = styled.img`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 10%;
  width: 80px;
  margin-right: 20px;
  @media (min-width: 781px) {
    display: none;
  }
`

const HamburgerLogin = styled(Login)`
  background-color: black;
`;

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuStateChange = (state) => {
    setIsOpen(state.isOpen);
  }

  const closeMenu = (e) => {
    setIsOpen(false);
  }

  return (
    <>
      <LogoHamburger src={logo} />
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
            to="/signup" 
            id="signup" 
            className="menu-item"
          >
            Sign Up!
          </Link>
          <Link
            onClick={closeMenu}
            id="signin" 
            className="menu-item">
            <HamburgerLogin/>
          </Link>
        </Menu>
    </div>
    </>
  );
};