//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Inner Dependencies
import { fetchSignUp } from "../reducers/user";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SignUpForm = styled.section`
  height: 100vh;
  margin-top: 100px;
`;

const Button = styled.button`
  background-color: #f5c81e;
  color: white;
  border-radius: 50px;
  border: none;
  width: 50%;
  padding: 10px;
  font-weight: bold;
`;

const Container = styled.section`
  height: 100vh;
  display: flex;
  // flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let content;

  const errorMessage = useSelector((store) => store.user.errors);
  let emailRedux = useSelector((store) => store.user.email);

  const successToast = () => toast.success("You have successfully signed up!");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignUp(email, password));
  };

  if (emailRedux === null) {
    content = (
      <SignUpForm>
        <form
          onSubmit={onFormSubmit}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={successToast}
          >
            Sign Up!
          </Button>
      <ToastContainer />
        </form>
        <p>{errorMessage && errorMessage.errorCode}</p>
      </SignUpForm>
    );
  } else {
    content = (
      <Container>
        <InnerContainer>
          <h1>You have succesfully Signed Up!</h1>
          <Link to={"/projects"}>
            <p>Projects Page</p>
          </Link>
          <Link to={"/upload"}>
            <p>Upload a projects</p>
          </Link>
        </InnerContainer>
      </Container>
    );
  }

  return <>{content}</>;
};
