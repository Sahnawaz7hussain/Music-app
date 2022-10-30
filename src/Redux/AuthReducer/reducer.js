import {
  getLocalData,
  removeLocalData,
  saveLocalData,
} from "../../utils/localData";
import * as types from "./actionType";
let token = getLocalData("token");
const initState = {
  isAuth: token ? true : false,
  isAuthLoading: false,
  isError: false,
  token: token || "",
};
export const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      saveLocalData("token", payload);
      return {
        ...oldState,
        isAuthLoading: false,
        isAuth: true,
        isError: false,
        token: payload,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuth: false,
        isAuthLoading: false,
        isError: true,
        token: "",
      };
    case types.USER_LOGOUT:
      removeLocalData("token");
      return {
        ...oldState,
        isAuth: false,
        isAuthLoading: false,
        isError: false,
        token: "",
      };
    default:
      return oldState;
  }
};
