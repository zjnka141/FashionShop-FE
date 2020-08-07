import * as types from '../actions';
const uiReducer = (state = {}, action) => {
  switch (action.type) {
    //SNACKBAR
    case types.SNACKBAR_SUCCESS:
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.message,
        snackbarType: 'success',
      };
    case types.SNACKBAR_FAILED:
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.message,
        snackbarType: 'error',
      };
    case types.SNACKBAR_CLEAR:
      return {
        ...state,
        snackbarOpen: false,
      };
    //MENU MOBILE SCREEN
    case types.SHOW_MENU_MOBILE:
      return {
        ...state,
        showMenuMobile: true,
      };
    case types.HIDE_MENU_MOBILE:
      return {
        ...state,
        showMenuMobile: false,
      };
    case types.TOGGLE_MENU_MOBILE:
      return {
        ...state,
        showMenuMobile: !state.showMenuMobile,
      };
    default:
      return state;
  }
};

export default uiReducer;
