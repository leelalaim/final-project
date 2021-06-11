//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

export const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = useSelector((store) => store.user.errors);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignUp(email, password));
  };

  return (
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
          onClick={() => {
            console.log("CLICK");
          }}
        >
          Sign Up!
        </Button>
      </form>
      <p>{errorMessage && errorMessage.errorCode}</p>
    </SignUpForm>
  );
};
