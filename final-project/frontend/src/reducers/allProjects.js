import { createSlice } from "@reduxjs/toolkit";

export const allProjects = createSlice({
  name: "allProjects",
  initialState: {
    userName: null,
    bootcamp: null,
    projectName: null,
    email: null,
    url: null,
    stack: null,
    description: null,
    week: null,
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
  },
});

export const fetchProjects = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/projects")
      .then((res) => res.json())
      .then((json) => {
        dispatch(allProjects.actions.setUserName(json));
      });
  };
};

export const fetchUpload = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/upload", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userName: getState().allProjects.userName,
      }),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((userName) => {
        dispatch(allProjects.actions.setUserName(userName));
        // console.log(userName);
      });
  };
};

// setCurrentStep: (store, action) => {
//   if (store.currentStep) {
//     store.history = [...store.history, action.payload];
//   }
//   store.currentStep = action.payload;
// }
