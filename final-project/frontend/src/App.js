//Outer Dependencies
import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Inner Dependencies
import { Projects } from './components/Projects';
import { Upload } from './components/Upload';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { allProjects } from './reducers/allProjects';
import { user } from 'reducers/user';
import { NavBar } from './components/NavBar';
// import { ui } from './reducers/ui';
// import { users } from './reducers/users';

const reducer = combineReducers({
  allProjects: allProjects.reducer,
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' />
          <Route path='/projects' component={Projects} />
          <Route path='/upload' component={Upload} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
