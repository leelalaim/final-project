//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const errorMessage = useSelector((store) => store.user.errors)

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignUp(email, password));
  };


  return (
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
  );
};
