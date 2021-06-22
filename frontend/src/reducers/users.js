import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { getApiUrl } from 'reusable/urls';

//Initial state dependant on whether there is a logged in user or not. 
const initialState = localStorage.getItem('user')
  ? {
      user: JSON.parse(localStorage.getItem('user')),
      errors: null,
      signUpSuccess: false,
    }
  : {
      user: null,
      errors: null,
      signUpSuccess: false,
    };

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (store, action) => {
      store.user = action.payload;
    },
    setErrors: (store, action) => {
      store.errors = action.payload;
    },
    setLogOut: () => {
      return {
        user: null,
        errors: null,
        signUpSuccess: false
      };
    },
    setSignUpSuccess: (store, action) => {
      store.signUpSuccess = action.payload;
    },
  },
});

// Fetch to sign-up to the website
export const fetchSignUp = (username, email, password) => {
  return (dispatch, getState) => {
    fetch(getApiUrl('signup'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username, 
        email, 
        password 
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        batch(() => {
          dispatch(users.actions.setUser(data));
          dispatch(users.actions.setSignUpSuccess(true));
        });

        localStorage.setItem('user', JSON.stringify(data));
      })
      .catch((error) => {
        error.json().then((errorData) => {
          dispatch(users.actions.setErrors(errorData));
        });
      });
  };
};

//Fetch to login when you already have a user
export const fetchLogIn = (email, password) => {
  return (dispatch, getState) => {
    fetch(getApiUrl('login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email, 
        password 
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        batch(() => {
          dispatch(users.actions.setUser(data));
          dispatch(users.actions.setErrors(null));
        });

        localStorage.setItem('user', JSON.stringify(data));
      })
      .catch((error) => {
        error.json().then((errorData) => {
          dispatch(users.actions.setErrors(errorData));
        });
      });
  };
};


export const getAccessToken = (store) => {
  if (store.users.user) {
    return store.users.user.accessToken
  }
  
  return null;
}