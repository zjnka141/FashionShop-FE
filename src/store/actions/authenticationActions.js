import * as types from './index';

export const loginUser = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
}

export const registerUser = (user) => {
  return {
    type: types.REGISTER_USER,
    user
  }
}