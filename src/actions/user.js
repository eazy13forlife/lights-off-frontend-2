import axios from "axios";

import types from "./types";
import { BACKEND_URL } from "../constants";

const createUser = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(startSignup());

      const response = await axios.post(
        `${BACKEND_URL}/users/signup`,
        userData
      );

      dispatch({
        type: types.CREATE_USER,
        payload: response.data,
      });

      dispatch(endSignup());

      dispatch(removeCreateUserError());
    } catch (e) {
      dispatch(endSignup());

      dispatch(sendCreateUserError(e.response.data));
    }
  };
};

const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(startLogin());

      const userResponse = await axios.post(
        `${BACKEND_URL}/users/login`,
        userData
      );

      dispatch({
        type: types.LOGIN_USER,
        payload: userResponse.data,
      });
      dispatch(endLogin());

      dispatch(removeLoginError());
    } catch (e) {
      dispatch(endLogin());

      dispatch({
        type: types.SEND_LOGIN_ERROR,
        payload: e.response.data,
      });
    }
  };
};

const logoutUser = () => {
  return async (dispatch, getState) => {
    try {
      const userInfo = getState().userInfo;

      await axios.post(
        `${BACKEND_URL}/users/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.authToken}`,
          },
        }
      );

      dispatch({
        type: types.LOGOUT_USER,
      });

      dispatch(removeLogoutError());

      return "success";
    } catch (e) {
      dispatch(sendLogoutError());
    }
  };
};

const sendLogoutError = () => {
  return {
    type: types.SEND_LOGOUT_ERROR,
  };
};

const removeLogoutError = () => {
  return {
    type: types.REMOVE_LOGOUT_ERROR,
  };
};

const sendCreateUserError = (message) => {
  return {
    type: types.SEND_CREATE_USER_ERROR,
    payload: message,
  };
};

const removeCreateUserError = () => {
  return {
    type: types.REMOVE_CREATE_USER_ERROR,
  };
};

const removeLoginError = () => {
  return {
    type: types.REMOVE_LOGIN_ERROR,
  };
};

const startLogin = () => {
  return {
    type: types.START_LOGIN,
  };
};

const startSignup = () => {
  return {
    type: types.START_SIGNUP,
  };
};

const endLogin = () => {
  return {
    type: types.END_LOGIN,
  };
};

const endSignup = () => {
  return {
    type: types.END_SIGNUP,
  };
};

export { createUser, loginUser, logoutUser, removeLogoutError };
