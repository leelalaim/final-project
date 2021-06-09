import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user } from "../reducers/user"

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
`;

const StyledTypography = styled(Typography, Link)`
  margin-right: 30px;
  color: #494949;
  font-weight: 600;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const AppBarStyling = styled(AppBar)`
  background: rgba(0,0,0,0);
  box-shadow: none;
`

const IconButtonStyle = styled(IconButton)`
  color: #494949;
`

const NavLink = styled.a`
  text-decoration: none;
`

export const NavBar = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
            <NavLink href="/projects">
              <StyledTypography variant="h6" href="/projects" className={classes.title}>
              Home
            </StyledTypography>
            </NavLink>
            <StyledTypography variant="h6" className={classes.title}>
              Projects
            </StyledTypography>
            <StyledTypography variant="h6" className={classes.title}>
              About
            </StyledTypography>
          </TypographyWrapper> 
          {auth && (
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
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => dispatch(user.actions.setLogOut())}>Sign out</MenuItem>
              </Menu>
            </div>
          )}
        </StyledToolbar>
      </AppBarStyling>
    </Container>
  );
}
