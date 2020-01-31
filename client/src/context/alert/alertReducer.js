import { ALERT, CLEAR_ALERT } from '../type';

export default (state, action) => {
  switch (action.type) {
    case ALERT:
      return [...state, action.payload];

    case CLEAR_ALERT:
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};
