import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../context/user/userContext';
import AlertContext from '../context/alert/alertContext';
import Alerts from './Alert';
import './login.css';

const Login = props => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { login, error, clearErrors } = userContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (error === 'Invalid Username or Password') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error]);

  const [user, setUser] = useState({
    username: '',
    password: '',
    remember: false
  });

  const submit = e => {
    e.preventDefault();
    const formData = {};
    formData.name = user.username;
    formData.password = user.password;
    const remember = user.remember;
    login(formData, remember);
    setTimeout(() => {
      window.location.pathname = '/';
    }, 500);
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className='card1_log'>
          <div className='card-header'>
            <h3 className='text-light'>Sign In</h3>
            <Alerts />
          </div>
          <div className='card-body'>
            <form onSubmit={submit}>
              <div className='input-group form-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-google'></i>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='username'
                  value={user.username}
                  required
                  onChange={e =>
                    setUser({
                      ...user,
                      username: e.target.value
                    })
                  }
                />
              </div>
              <div className='input-group form-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-key'></i>
                  </span>
                </div>
                <input
                  type='password'
                  className='form-control'
                  placeholder='password'
                  value={user.password}
                  required
                  onChange={e =>
                    setUser({
                      ...user,
                      password: e.target.value
                    })
                  }
                />
              </div>
              <div className='row align-items-center remember'>
                <input
                  type='checkbox'
                  checked={user.remember}
                  onChange={() =>
                    setUser({ ...user, remember: !user.remember })
                  }
                />
                Remember Me
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  value='Login'
                  className='btn btn-warning btn-block mt-3 text-light float-right'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
