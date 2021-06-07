//Outer Dependencies
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

//Inner Dependencies
import { fetchLogIn } from "../reducers/user";

// I would like this to be a pop-up on the first page.
export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogIn(email, password));
    // setUser(email, password);
  };
  //console.log(user);

  // if (user) {
  //   return
  //   <div>
  //     {user.email} is logged in
  //   </div>
  // }

  return (
    <section>
      <form onSubmit={onFormSubmit}>
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
      </form>
    </section>
  );
};
