import axios from 'axios';

export function loginUserService(user) {
  const path = `http://localhost:8080/auth/login`;
  return axios.post(path, user)
    .then((response) => response.data)
    .catch(err => {
        return Promise.reject(err?.response?.data);
    });
}

export function checkToken() {
  const path = `http://localhost:8080/token/checkToken`;
  const token = localStorage.getItem('access_token')
  return axios.get(path, {headers: {accesstoken: token}} )
    .then((response) => response.data)
    .catch(err => {
        return Promise.reject(err?.response?.data);
    });
}

export function registerUserService(user) {
  const path = `${process.env.REACT_APP_BASE_URL}/auth/register`;
  const parameters = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  return fetch(path, parameters)
    .then((response) => response.json())
    .then((json) => json);
}