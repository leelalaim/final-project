import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';

//Why don't we store the password?
export const user = createSlice({
  name: 'user',
  initialState: {
    email: null,
    password: null,
    accessToken: null,
    errors: null,
  },
  reducers: {
    setUserName: (store, action) => {
      store.userName = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setPassword: (store, action) => {
      store.password = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setErrors: (store, action) => {
      store.errors = action.payload;
    },
  },
});

export const fetchSignUp = (username, email, password) => {
  return (dispatch, getState) => {
    fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        userName: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        batch(() => {
          dispatch(user.actions.setUserName(json.userName));
          dispatch(user.actions.setEmail(json.email));
          dispatch(user.actions.setPassword(json.password));
          dispatch(user.actions.setAccessToken(json.accessToken));
        });
      });
  };
};

export const fetchLogIn = (email, password) => {
  return (dispatch, getState) => {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok) {
          if (body.errorCode === 'email-exists') {
            dispatch(user.actions.setErrors('The email already exists'));
          } else {
            dispatch(user.actions.setErrors('Something went wrong'));
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
