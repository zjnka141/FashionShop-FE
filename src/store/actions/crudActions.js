import * as types from './index';

export const getList = (resource, params) => {
  return {
    type: types.GET_LIST_REQUEST,
    resource,
    params
  }
};
export const getListSuccess = (data, total) => {
  return {
    type: types.GET_LIST_SUCCESS,
    data,
    total
  }
};
export const getListFailed = (error) => {
  return {
    type: types.GET_LIST_FAILED,
    error
  }
};


export const getOne = (resource, id) => {
  return {
    type: types.GET_ONE_REQUEST,
    resource,
    id
  }
}