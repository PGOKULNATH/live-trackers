import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { ALERT, CLEAR_ALERT } from '../type';
import uuid from 'uuid';

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
        payload: id
      });
    }, timeout);
  };

  return (
    <AlertContext.Provider value={{ alerts: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
