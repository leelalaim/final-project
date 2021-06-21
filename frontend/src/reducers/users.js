import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { getApiUrl } from 'reusable/urls';

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
      console.log(action);
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
    fetch(getApiUrl('signup'), options(email, password))
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
          // dispatch(users.actions.setSignUpSuccess(false));
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
          dispatch(users.actions.setErrors(errorData));
        });
      });
  };
};

//Login fetch
export const fetchLogIn = (email, password) => {
  return (dispatch, getState) => {
    fetch(getApiUrl('login'), options(email, password))
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