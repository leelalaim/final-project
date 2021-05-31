import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { Projects } from "./components/Projects";
import { Upload } from "./components/Upload";
import { allProjects } from "./reducers/allProjects";
import { ui } from "./reducers/ui";
import { users } from "./reducers/users";

const reducer = combineReducers({
  allProjects: allProjects.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route path="/projects" component={Projects} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
