import axios from "axios";
import * as types from "./actionType";
const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};
const userLoginSuccess = (payload) => {
  return { type: types.USER_LOGIN_SUCCESS, payload };
};
const userLoginFailure = () => {
  return { type: types.USER_LOGIN_FAILURE };
};

const userLogout = () => {
  return { type: types.USER_LOGOUT };
};

export const login = (payload) => (dispatch) => {
  dispatch(userLoginRequest());
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((r) => {
      return dispatch(userLoginSuccess(r.data.token));
    })
    .catch((e) => {
      dispatch(userLoginFailure());
    });
};

export const logout = (payload) => (dispatch) => {
  dispatch(userLogout());
};
