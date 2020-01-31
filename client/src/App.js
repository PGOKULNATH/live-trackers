import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import UserState from './context/user/userState';
import AlertState from './context/alert/alertState';

const App = () => {
  return (
    <UserState>
      <AlertState>
        <BrowserRouter>
          {sessionStorage.token === undefined &&
          localStorage.token === undefined ? (
            <Login />
          ) : (
            <Home />
          )}
        </BrowserRouter>
      </AlertState>
    </UserState>
  );
};

export default App;
