import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { users } from "../reducers/users";
import { Signin } from "./Signin";
import logo from "../assets/logo.png";

// React-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  border: none;
  @media (max-width: 781px) {
    display: none;
  }
`;

const TypographyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledTypography = styled(Link)`
  margin-right: 30px;
  color: #494949;
  font-weight: 600;
  text-decoration: none;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const AppBarStyling = styled(AppBar)`
  background: rgba(0, 0, 0, 0);
  box-shadow: none;
`;

const IconButtonStyle = styled(IconButton)`
  color: #494949;
`;

const Logo = styled.img`
  width: 100px;
  margin-right: 20px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

// const StyledMenuItem = styled(Link)`
//   text-decoration: none;
//   color: black;
//   padding: 10px;
// `;

export const NavBar = () => {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let content;

  const emailRedux = useSelector((store) => store.users.user && store.users.user.email);
  const successToast = () => toast.success("You have successfully signed out!");

  const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    dispatch(users.actions.setLogOut());
    localStorage.clear();
    // successToast()
  };

  if (!emailRedux) {
    content = (
      <Container className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBarStyling position="static">
          <StyledToolbar>
            <TypographyWrapper>
              <a href="/">
                <Logo src={logo} alt="Logo"></Logo>
              </a>
              <StyledTypography to="/" variant="h6" className={classes.title}>
                Home
              </StyledTypography>
              <StyledTypography
                to="/projects"
                variant="h6"
                className={classes.title}
              >
                Projects
              </StyledTypography>
              <StyledTypography
                to="/about"
                variant="h6"
                className={classes.title}
              >
                About
              </StyledTypography>
              <StyledTypography
                to="/signup"
                variant="h6"
                className={classes.title}
              >
                Sign Up
              </StyledTypography>
              <Signin />
            </TypographyWrapper>
            <div>
            </div>
          </StyledToolbar>
        </AppBarStyling>
      </Container>
    );
  } else {
    content = (
      <Container className={classes.root}>
        {/* <FormGroup>
            <FormControlLabel
              control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}
        <AppBarStyling position="static">
          <StyledToolbar>
            <TypographyWrapper>
              <a href="/">
                <Logo src={logo} alt="Logo"></Logo>
              </a>
              <StyledTypography to="/" variant="h6" className={classes.title}>
                Home
              </StyledTypography>
              <StyledTypography
                to="/projects"
                variant="h6"
                className={classes.title}
              >
                Projects
              </StyledTypography>
              <StyledTypography
                to="/upload"
                variant="h6"
                className={classes.title}
              >
                Upload
              </StyledTypography>
              <StyledTypography
                to="/about"
                variant="h6"
                className={classes.title}
              >
                About
              </StyledTypography>
            </TypographyWrapper>
            <div>
              <IconButtonStyle
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButtonStyle>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    logOut();
                    successToast();
                  }}
                >
                  Sign out
                </MenuItem>
                <ToastContainer />
              </Menu>
            </div>
          </StyledToolbar>
        </AppBarStyling>
      </Container>
    );
  }

  return <>{content}</>;
};
