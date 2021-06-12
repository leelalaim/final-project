//Outer Dependencies
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link } from 'react-router-dom'
import styled from "styled-components"

//Inner Dependencies
import { fetchSignUp } from "../reducers/user";

const SignUpForm = styled.section`
margin-top: 100px;
`

export const SignUp = () => {
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
