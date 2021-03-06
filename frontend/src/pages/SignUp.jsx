//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components/macro";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Inner Dependencies
import { fetchSignUp } from "../reducers/users";
import { users } from "reducers/users";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    paddingTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//Styled Components
const PageContainer = styled.section`
  @media (min-width: 768px) {
    padding-top: 50px;
    height: 98vh;
  }
`;

const Avatars = styled(Avatar)`
  background-color: #eeca4a;
`;

const FormHeader = styled(Typography)`
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 40px;
`;

const InputField = styled(TextField)`
  width: 100%;
`;

const SignUpButton = styled(Button)`
  background-color: #f5c81e;
  color: white;
  border-radius: 50px;
  border: none;
  width: 50%;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

//Page
export const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  let errorMessage = useSelector((store) => store.users.errors);
  const signUpSuccess = useSelector((store) => store.users.signUpSuccess);

  if (signUpSuccess) {
    toast.success("You have successfully signed up!");
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      dispatch(
        users.actions.setErrors({
          errorCode: "The passwords do not match",
          message: "The passwords do not match",
        })
      );
    } else {
      dispatch(fetchSignUp(username, email, password));
    }
  };
  
  return (
    <PageContainer>
      {signUpSuccess && (
        <Redirect
          to={{
            pathname: "/projects",
          }}
        />
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatars className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatars>
          <FormHeader component="h1" variant="h5">
            Sign up
          </FormHeader>
          <Form
            onSubmit={onFormSubmit}
            className={classes.root}
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <InputField
                  variant="outlined"
                  required
                  name="username"
                  id="standard-basic"
                  label="Username"
                  value={username}
                  autoComplete="username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputField
                  variant="outlined"
                  required
                  type="email"
                  name="email"
                  id="standard-basic"
                  label="Email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputField
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
                <InputField
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
            <ButtonWrapper>
              <SignUpButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up!
              </SignUpButton>
            </ButtonWrapper>

            <p>
              Please note that we store your email in our database for the
              purpose of signing up and signing in.
            </p>
            <Grid container justify="flex-end"></Grid>
          </Form>
          <p>{errorMessage && errorMessage.message}</p>
        </div>
      </Container>
    </PageContainer>
  );
};
