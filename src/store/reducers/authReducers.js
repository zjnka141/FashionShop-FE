import * as types from '../actions';

const initState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null,
        user: null
      }
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        user: action.user
      }
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.error
      }
    default:
      return state;
  }
};

export default authReducer;