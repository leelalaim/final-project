import { createSlice } from '@reduxjs/toolkit';

export const users = createSlice({
  name: 'users',
  inititalState: {
    userName: null,
    email: null,
    password: null,
  },
  reducers: {
    setName: (store, action) => {
      store.userName = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setPassword: (store, action) => {
      store.password = action.payload;
    },
  },
});
