import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';

import { API_URL } from 'reusable/urls';

const initialState = localStorage.getItem('user')
  ? {
      email: JSON.parse(localStorage.getItem('user')).email,
      accessToken: JSON.parse(localStorage.getItem('user')).accessToken,
      errors: null,
    }
  : {
      email: null,
      accessToken: null,
      errors: null,
    };

console.log(localStorage.getItem('user'));
console.log(initialState);

export const user = createSlice({
  name: 'user',
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

const options = (email, password) => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  };
};

// Signup fetch
export const fetchSignUp = (email, password) => {
  return (dispatch, getState) => {
    fetch(API_URL('signup'), options(email, password))
      .then(async (res) => {
        const body = await res.json();
        if (!res.ok) {
          if (body.errorCode === 'E-mail is already in use') {
            dispatch(user.actions.setErrors('E-mail is already in use'));
          } else {
            dispatch(user.actions.setErrors('Something went wrong'));
          }
          return;
        }
        return body;
      })
      .then((res) => {
        console.log(res);
        batch(() => {
          dispatch(user.actions.setEmail(res.email));
          dispatch(user.actions.setAccessToken(res.accessToken));
        });

        localStorage.setItem(
          'user',
          JSON.stringify({
            email: res.email,
            accessToken: res.accessToken,
          })
        );
      });
  };
};

//Login fetch
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
      // Do we need async and await?
      .then(async (res) => {
        const body = await res.json();
        console.log(body);
        if (!res.ok) {
          if (body.errorCode === 'E-mail is already in use') {
            dispatch(user.actions.setErrors('E-mail is already in use'));
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

          localStorage.setItem(
            'user',
            JSON.stringify({
              email: data.email,
              accessToken: data.accessToken,
            })
          );
        } else {
          dispatch(user.actions.setErrors(data));
        }
      });
  };
};
