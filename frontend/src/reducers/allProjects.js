import { createSlice } from "@reduxjs/toolkit";
import { ui } from "reducers/ui";

// import { API_URL } from 'reusable/urls';

export const allProjects = createSlice({
  name: "allProjects",
  initialState: {
    projectList: [],
    projectUploadSuccess: false,
    projectDeleteSuccess: false,
  },
  reducers: {
    addProject: (store, action) => {
      store.projectList = [...store.projectList, action.payload];
    },
    setProjectList: (store, action) => {
      store.projectList = action.payload;
    },
    setProjectUploadSuccess: (store, action) => {
      store.projectUploadSuccess = action.payload;
    },
    setProjectDeleteSuccess: (store, action) => {
      store.projectDeleteSuccess = action.payload;
    },
    deleteProject: (store, action) => {
      store.projectList = store.projectList.filter(
        (deletedProject) => deletedProject._id !== action.payload
      );
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
    fetch("http://localhost:8080/projects?" + new URLSearchParams(queryParams))
      .then((res) => res.json())
      .then((projectList) => {
        dispatch(allProjects.actions.setProjectList(projectList));
      });
  };
};

export const uploadProject = (formData) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch("http://localhost:8080/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((project) => {
        dispatch(ui.actions.setLoading(false));
        dispatch(allProjects.actions.addProject(project));
        dispatch(allProjects.actions.setProjectUploadSuccess(true));
        dispatch(allProjects.actions.setProjectUploadSuccess(false));
      });
  };
};

export const deleteOptions = (id) => {
  return {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ id: id }),
  };
};

export const deleteProject = (id) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch(`http://localhost:8080/delete/${id}`, deleteOptions(id))
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch(allProjects.actions.deleteProject(data._id));
          dispatch(allProjects.actions.setProjectDeleteSuccess(true));
          dispatch(allProjects.actions.setProjectDeleteSuccess(false));
          dispatch(ui.actions.setLoading(false));
        }
        // add loader (false )
        // reload projects page
      );
  };
};

// setCurrentStep: (store, action) => {
//   if (store.currentStep) {
//     store.history = [...store.history, action.payload];
//   }
//   store.currentStep = action.payload;
// }
