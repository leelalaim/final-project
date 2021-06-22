import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import logo from "../assets/logo.png";
import { Signin } from "./Signin";

import { users } from "../reducers/users";
import "../../src/index.css";

const LogoHamburger = styled.img`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 5%;
  left: 10%;
  width: 80px;
  margin-right: 20px;
  @media (min-width: 415px) and (max-width: 768px) {
    width: 130px;
    top: 2.7%;
    left: 7%;
  }
  @media (min-width: 781px) {
    display: none;
    
  }
`;

const HamburgerLogin = styled(Signin)`
  background-color: black;
  text-decoration: none;
`;

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  let content;

  const emailRedux = useSelector((store) => store.users.user && store.users.user.email);

  const onMenuStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = (e) => {
    setIsOpen(false);
  };

  const logOut = () => {
    dispatch(users.actions.setLogOut());
    localStorage.clear();
  };

  if (!emailRedux) {
    content = (
      <>
        <a href="/">
          <LogoHamburger src={logo} />
        </a>
        <div className="hamburger">
          <Menu isOpen={isOpen} onStateChange={onMenuStateChange} right>
            <Link onClick={closeMenu} to="/" id="home" className="menu-item">
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
            <div onClick={closeMenu}>
              <HamburgerLogin />
            </div>
          </Menu>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <a href="/">
          <LogoHamburger src={logo} />
        </a>
        <div className="hamburger">
          <Menu isOpen={isOpen} onStateChange={onMenuStateChange} right>
            <Link onClick={closeMenu} to="/" id="home" className="menu-item">
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
              onClick={() => {
                logOut();
                closeMenu();
              }}
              to="/"
              id="signout"
              className="menu-item"
            >
              Sign Out
            </Link>
          </Menu>
        </div>
      </>
    );
  }

  return <>{content}</>;
};
