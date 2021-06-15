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
    setLogOut: () => {
      return {
        email: null,
        accessToken: null,
        errors: null,
      };
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
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        batch(() => {
          dispatch(user.actions.setEmail(data.email));
          dispatch(user.actions.setAccessToken(data.accessToken));
        });

        localStorage.setItem(
          'user',
          JSON.stringify({
            email: data.email,
            accessToken: data.accessToken,
          })
        );
      })
      .catch((error) => {
        error.json().then((errorData) => {
          dispatch(user.actions.setErrors(errorData));
        });
      });
  };
};

//Login fetch
export const fetchLogIn = (email, password) => {
  return (dispatch, getState) => {
    fetch(API_URL('login'), options(email, password))
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
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
      })
      .catch((error) => {
        error.json().then((errorData) => {
          dispatch(user.actions.setErrors(errorData));
        });
      });
  };
};
