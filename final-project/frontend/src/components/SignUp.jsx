//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

//Inner Dependencies
import { fetchSignUp } from "../reducers/user";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSignUp(email, password));
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="text"
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
    </section>
  );
};
