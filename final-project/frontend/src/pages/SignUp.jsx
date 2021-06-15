//Outer Dependencies
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link } from 'react-router-dom'
import styled from "styled-components"

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
  let content;

  const errorMessage = useSelector((store) => store.user.errors)
  let emailRedux = useSelector((store)=> store.user.email)

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignUp(email, password));
  };

  if (emailRedux === null) {
    content = 
      <SignUpForm>
        <form onSubmit={onFormSubmit}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            onClick={() => {
              console.log("CLICK");
            }}
          >
            Sign Up!
          </button>
        </form>
        <p>{errorMessage && errorMessage.errorCode}</p>
      </SignUpForm>
  } else {
    content = <>
    <h1>You have succesfully Signed Up!</h1>
    <Link to={'/projects'}>
    <p>Projects Page</p>
    </Link>
    <Link to={'/upload'}>
    <p>Upload a projects</p>
    </Link>
    </> 
  }

  return (
   <>{content}</>
  );
};
