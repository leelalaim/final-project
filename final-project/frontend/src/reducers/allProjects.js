import { createSlice } from '@reduxjs/toolkit';
import React, { useRef } from 'react';

export const allProjects = createSlice({
  name: 'allProjects',
  initialState: {
    projectList: [],
  },
  reducers: {
    addProject: (store, action) => {
      store.projectList = [...store.projectList, action.payload];
      // console.log("Second success")
    },
    setProjectList: (store, action) => {
      store.projectList = action.payload;
    },
  },
});

export const fetchProjects = (filters = {}) => {
  const { stack, bootcamp, week } = filters;
  const queryParams = {};
  if (stack) {
    queryParams.stack = stack;
  }

  if (bootcamp) {
    queryParams.bootcamp = bootcamp;
  }

  if (week) {
    queryParams.week = week;
  }

  return (dispatch) => {
    fetch('http://localhost:8080/projects?' + new URLSearchParams(queryParams))
      .then((res) => res.json())
      .then((projectList) => {
        dispatch(allProjects.actions.setProjectList(projectList));
      });
  };
};

export const uploadProject = (project, formData) => {
  return (dispatch, getState) => {
    fetch('http://localhost:8080/upload', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(project),
      formData,
    })
      .then((res) => res.json())
      .then((project) => {
        console.log(project);
        dispatch(allProjects.actions.addProject(project));
      });
  };
};

const deleteOptions = (id) => {
  return {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ id: id }),
  };
};

export const deleteProject = (id) => {
  fetch(`http://localhost:8080/delete/${id}`, deleteOptions(id)).then((res) =>
    res.json()
  );
  // .then (res.json() =>
  // add loader (false )
  //reload projects page
  // );
};

// setCurrentStep: (store, action) => {
//   if (store.currentStep) {
//     store.history = [...store.history, action.payload];
//   }
//   store.currentStep = action.payload;
// }
