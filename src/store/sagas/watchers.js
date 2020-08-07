import {takeLatest, take, fork} from 'redux-saga/effects';
import * as types from '../actions/index';
import {loginFlow} from './authenticationSaga';
import {getListSaga} from './crudSaga';

export function* authWatcher() {
  yield fork(loginFlow);
}

export function* crudWatcher() {
  yield takeLatest(types.GET_LIST_REQUEST, getListSaga);
}