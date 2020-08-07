import * as types from '../actions';
const initState = {
  loading: false,
  data: null,
  total: 0,
  error: null,
};

const crudReducer = (state = initState, action) => {
  switch (action.type) {
    case types.GET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        total: 0,
      };
    case types.GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        total: action.total,
      };
    case types.GET_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.GET_ONE_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
      };
    case types.GET_ONE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case types.GET_ONE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default crudReducer;
