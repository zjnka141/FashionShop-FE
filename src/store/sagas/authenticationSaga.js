import {
  loginUserService,
  checkToken,
} from '../../services/authenticationServices';
import { call, put, take } from 'redux-saga/effects';
import * as types from '../actions';

function storeToken(token) {
  window.localStorage.setItem('access_token', token);
}
function removeToken() {
  window.localStorage.removeItem('access_token');
}

function* authorize(user) {
  try {
    const response = yield call(loginUserService, user);
    const accessToken = response.accessToken;
    yield put({ type: types.LOGIN_USER_SUCCESS, user: response.userInfo });
    yield put({
      type: types.SNACKBAR_SUCCESS,
      message: 'Đăng nhập thành công',
    });
    return accessToken;
  } catch (err) {
    yield put({ type: types.LOGIN_USER_ERROR, error: err });
    yield put({ type: types.SNACKBAR_FAILED, message: err.msg });
  }
}
export function* loginFlow(action) {
  while (true) {
    const { user } = yield take(types.LOGIN_USER);
    const token = yield call(authorize, user);
    if (token) {
      yield call(storeToken, token);
      yield take('LOGOUT');
      yield call(removeToken);
    }
  }
}
