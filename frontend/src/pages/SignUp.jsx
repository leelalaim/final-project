//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Inner Dependencies
import { fetchSignUp } from "../reducers/user";
import { user } from "reducers/user";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  let errorMessage = useSelector((store) => store.user.errors);
  const signUpSuccess = useSelector((store) => store.user.signUpSuccess);

  if (signUpSuccess) {
    toast.success("You have successfully signed up!");
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      dispatch(
        user.actions.setErrors({
          errorCode: "The passwords do not match",
          message: "The passwords do not match",
        })
      );
    } else {
      dispatch(fetchSignUp(email, password));
    }
  };
  console.log(errorMessage);

  return (
    <>
      {signUpSuccess && (
        <Redirect
          to={{
            pathname: "/projects",
            // state: { from: location }
          }}
        />
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            onSubmit={onFormSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  name="email"
                  id="standard-basic"
                  label="Email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  name="password"
                  id="standard-basic"
                  label="Password"
                  type="password"
                  autoComplete="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  name="repeat password"
                  id="standard-basic"
                  label="Repeat Password"
                  type="password"
                  autoComplete="repeat-password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up!
            </Button>
            <p>Disclaimer for storing e-mails</p>
            <Grid container justify="flex-end"></Grid>
          </form>
          <p>{errorMessage && errorMessage.errorCode}</p>
        </div>
      </Container>
    </>
  );
};
