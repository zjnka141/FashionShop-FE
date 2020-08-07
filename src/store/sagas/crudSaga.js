import ApiService from '../../services/apiService';
import {put, call} from 'redux-saga/effects';
import { getListSuccess, getListFailed } from  '../actions/crudActions';
import navigateTo from "../../services/navigation";

function getList(resource, params) {
  return ApiService.get(resource, params)
}

export function* getListSaga(action) {
  try {
    const data = yield call(getList, action.resource, {params: action.params});
    yield put(getListSuccess(data));
    navigateTo('/login');
  } catch(err) {
    console.log("GGGGGG", err)
    yield put(getListFailed(err));
  }
}