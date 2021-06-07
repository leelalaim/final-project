import { createSlice } from "@reduxjs/toolkit";

export const allProjects = createSlice({
  name: "allProjects",
  initialState: {
    projectList: [],
  },
  reducers: {
    addProject: (store, action) => {
      store.projectList = [...store.projectList, action.payload];
    },
    setProjectList: (store, action) => {
      store.projectList = action.payload;
    },
  },
});


export const fetchProjects = () => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/projects")
      .then((res) => res.json())
      .then((projectList) => {
        dispatch(allProjects.actions.setProjectList(projectList));
      });
  };
};

export const uploadProject = (project) => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/upload", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((project) => {
        dispatch(allProjects.actions.addProject(project));
      });
  };
};

// setCurrentStep: (store, action) => {
//   if (store.currentStep) {
//     store.history = [...store.history, action.payload];
//   }
//   store.currentStep = action.payload;
// }
