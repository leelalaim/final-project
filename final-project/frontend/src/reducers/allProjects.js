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

export const fetchUpload = (userName, projectsList) => {
  return (dispatch, getState) => {
    fetch("http://localhost:8080/upload", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ userName: getState().allProjects.projectsList.userName }),
    })
      .then((res) => console.log(res))
      // .then((uploadedProject) => {
      //   dispatch(
      //     // console.log(uploadedProject),
      //     allProjects.actions.setProjectList([...projectsList, uploadedProject])
      //   );
      // });
  };
};

// setCurrentStep: (store, action) => {
//   if (store.currentStep) {
//     store.history = [...store.history, action.payload];
//   }
//   store.currentStep = action.payload;
// }
