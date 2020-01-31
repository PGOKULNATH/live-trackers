import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search';
import Register from './Register';
import setAuthToken from '../utils/setAuthToken';
import Navbar from './Navbar';

const Home = () => {
  if (sessionStorage.token !== undefined) {
    setAuthToken(sessionStorage.token);
  }
  if (localStorage.token !== undefined) {
    setAuthToken(localStorage.token);
  }
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </>
  );
};

export default Home;
