import { createSlice } from "@reduxjs/toolkit";

export const allProjects = createSlice({
  name: "allProjects",
  initialState: {
    projectsList: [],
  },
  reducers: {
    setProjectList: (store, action) => {
      store.projectsList = action.payload;
    },
  },
});

export const fetchProjects = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/projects")
      .then((res) => res.json())
      .then((json) => {
        dispatch(allProjects.actions.setProjectList(json));
      });
  };
};

export const fetchProjects = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/projects")
      .then((res) => res.json())
      .then((json) => {
        dispatch(allProjects.actions.setProjectList(json));
      });
  };
};