//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

//Inner Dependencies
import { fetchLogIn } from "../reducers/user";

const Section = styled.section`
height: 400px;
`;

const Form = styled.form`
padding: 100px;

`;


// I would like this to be a pop-up on the first page.
export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = useSelector((store) => store.user.errors)

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogIn(email, password));
  };

  return (
    <Section>
      <Form onSubmit={onFormSubmit}>
        <label>E-mail</label>
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
          Log In
        </button>
      </Form>
      <p>{errorMessage && errorMessage.errorCode}</p>
    </Section>
  );
};
