//Outer Dependencies
import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Inner Dependencies
import { LandingPage } from './pages/LandingPage';
import { Projects } from './pages/Projects';
import { Upload } from './pages/Upload';
import { SignUp } from './pages/SignUp';
import { Login } from './components/Login';
import { allProjects } from './reducers/allProjects';
import { user } from 'reducers/user';
import { Hamburger } from './components/Hamburger';
import { NavBar } from './components/NavBar';
// import { Footer } from './components/Footer';
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
      <BrowserRouter>
        <NavBar />
        <Hamburger />
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/projects' component={Projects} />
          <Route path='/upload' component={Upload} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          {/* <Footer /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
