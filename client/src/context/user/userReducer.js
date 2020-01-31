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
  INJURY_FAIL,
  ADD_INJURY,
  DELETE_INJURY
} from '../type';

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      action.payload.remember
        ? localStorage.setItem('token', action.payload.user.token)
        : sessionStorage.setItem('token', action.payload.user.token);
      return {
        ...state,
        ...action.payload.user,
        loading: false
      };

    case REGISTER:
      return {
        ...state,
        user: action.payload,
        error: 'Register Success'
      };

    case USER_UPDATE:
      return {
        ...state,
        user: action.payload,
        error: 'Update Success'
      };

    case USER_DELETE:
      return {
        ...state,
        user: null,
        error: 'Delete Success'
      };

    case ADD_INJURY:
      return {
        ...state,
        user: action.payload,
        error: 'Injury Added'
      };

    case DELETE_INJURY:
      return {
        ...state,
        user: action.payload,
        error: 'Injury Deleted'
      };

    case INJURY_FAIL:
    case REGISTER_FAIL:
    case USER_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.clear();
      sessionStorage.clear();
      return {
        ...state,
        token: null,
        loading: false,
        user: null,
        error: action.payload
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case USER_LOAD:
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    default:
      return state;
  }
};
