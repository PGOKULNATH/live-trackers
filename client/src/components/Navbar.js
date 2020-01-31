import React, { useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';

const LoginNav = () => {
  const userContext = useContext(UserContext);
  const { logout, error } = userContext;

  useEffect(() => {
    if (error === 'Invalid token') {
      logout();
      window.location.pathname = '/';
    }
  }, [error]);

  return (
    <nav className='navbar navbar-expand navbar-light'>
      <a className='navbar-band' href='/'>
        <img src='logo.png' width='40' height='40' alt='learner' />
        <span className='bold h4 mt-5'>Live Trackers</span>
      </a>
      <button
        type='button'
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbar'>
        <ul className='navbar-nav ml-auto' id='act'>
          <li
            className={
              window.location.pathname === '/' ? 'nav-item active' : 'nav-item'
            }
          >
            <a href='/' className='nav-link text-light'>
              Home
            </a>
          </li>
          <li
            className={
              window.location.pathname === '/register'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <a href='/register' className='nav-link text-light'>
              Register
            </a>
          </li>
          <li className='nav-item but'>
            <a href='/' className='nav-link text-light' onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LoginNav;
