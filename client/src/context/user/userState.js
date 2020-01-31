import React, { useReducer } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import UserReducer from './userReducer';
import UserContext from './userContext';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER,
  REGISTER_FAIL,
  CLEAR_ERROR,
  USER_LOAD,
  USER_UPDATE,
  USER_DELETE,
  USER_FAIL,
  ADD_INJURY,
  DELETE_INJURY,
  INJURY_FAIL
} from '../type';

const UserState = props => {
  const initialState = {
    token: null,
    user: null,
    error: null,
    loading: true
  };

  if (sessionStorage.token !== undefined) {
    initialState.token = sessionStorage.token;
  }
  if (localStorage.token !== undefined) {
    initialState.token = localStorage.token;
  }

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const loadUser = async id => {
    try {
      const res = await axios.get(
        'http://localhost:5000/api/register?id=' + id
      );
      dispatch({
        type: USER_LOAD,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const updateUser = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        'http://localhost:5000/api/register/' + formData.id,
        formData,
        config
      );

      dispatch({
        type: USER_UPDATE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const deleteUser = async id => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.delete(
        'http://localhost:5000/api/register/' + id,
        config
      );

      dispatch({
        type: USER_DELETE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: USER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const deleteInjury = async formData => {
    try {
      const res = await axios.delete(
        'http://localhost:5000/api/injury?id=' +
          formData.id +
          '&injury_id=' +
          formData.injury_id
      );
      dispatch({
        type: DELETE_INJURY,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: INJURY_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const addInjury = async formData => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/injury',
        formData
      );

      dispatch({
        type: ADD_INJURY,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: INJURY_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(
        'http://localhost:5000/api/register',
        formData,
        config
      );

      dispatch({
        type: REGISTER,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const login = async (formData, remember) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(
        'http://localhost:5000/api/login',
        formData,
        config
      );

      await dispatch({
        type: LOGIN,
        payload: {
          user: res.data,
          remember: remember
        }
      });

      if (sessionStorage.token !== undefined) {
        setAuthToken(sessionStorage.token);
      }
      if (localStorage.token !== undefined) {
        setAuthToken(localStorage.token);
      }
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  const logout = () => dispatch({ type: LOGOUT });

  const clearErrors = () => dispatch({ type: CLEAR_ERROR });

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        error: state.error,
        loading: state.loading,
        login,
        logout,
        clearErrors,
        register,
        loadUser,
        updateUser,
        deleteUser,
        addInjury,
        deleteInjury
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
