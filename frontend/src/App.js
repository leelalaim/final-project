//Outer Dependencies
import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";

//Inner Dependencies
import { LandingPage } from './pages/LandingPage';
import { Projects } from './pages/Projects';
import { Upload } from './pages/Upload';
import { SignUp } from './pages/SignUp';
import { Signin } from './components/Signin';
import { About } from './pages/About';
import { allProjects } from './reducers/allProjects';
import { Footer } from './components/Footer';
import { users } from 'reducers/users';
import { ui } from 'reducers/ui';
import { Hamburger } from './components/Hamburger';
import { NavBar } from './components/NavBar';


const reducer = combineReducers({
  allProjects: allProjects.reducer,
  users: users.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Hamburger />
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/projects' component={Projects} />
          <Route path='/upload' component={Upload} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={Signin} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
};
