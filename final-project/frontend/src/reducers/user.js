import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";

const initialState = localStorage.getItem("user")
  ? {
      email: JSON.parse(localStorage.getItem("user")).email,
      accessToken: JSON.parse(localStorage.getItem("user")).accessToken,
      errors: null,
    }
  : {
      email: null,
      accessToken: null,
      errors: null,
    };

console.log(localStorage.getItem("user"));
console.log(initialState);

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setErrors: (store, action) => {
      store.errors = action.payload;
    },
  },
});

export const fetchSignUp = (email, password) => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        batch(() => {
          dispatch(user.actions.setEmail(json.email));
          dispatch(user.actions.setAccessToken(json.accessToken));

          localStorage.setItem(
            "user",
            JSON.stringify({
              email: json.email,
              accessToken: json.accessToken,
            })
          );
        });
      });
  };
};

export const fetchLogIn = (email, password) => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    // Do we need async and await?
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok) {
          if (body.errorCode === "email-exists") {
            dispatch(user.actions.setErrors("The email already exists"));
          } else {
            dispatch(user.actions.setErrors("Something went wrong"));
          }
          return;
        }
        return body;
      })
      .then((data) => {
        if (data) {
          batch(() => {
            dispatch(user.actions.setEmail(data.email));
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setErrors(null));
          });
        } else {
          dispatch(user.actions.setErrors(data));
        }
      });
  };
};
