import axios from "axios";

import types from "./types";

const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/signup",
        userData
      );

      dispatch({
        type: types.CREATE_USER,
        payload: response.data,
      });
    } catch (e) {
      dispatch(sendCreateUserError(e.response.data));
    }
  };
};

const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const userResponse = await axios.post(
        "http://localhost:3000/users/login",
        userData
      );

      dispatch({
        type: types.LOGIN_USER,
        payload: userResponse.data,
      });
    } catch (e) {
      console.log(e);
      dispatch({
        type: types.SEND_LOGIN_ERROR,
        payload: e.response.data,
      });
    }
  };
};

const sendCreateUserError = (message) => {
  return {
    type: types.SEND_CREATE_USER_ERROR,
    payload: message,
  };
};

const removeCreateUserError = (message) => {
  return {
    type: types.REMOVE_CREATE_USER_ERROR,
  };
};
export { createUser, removeCreateUserError, loginUser };
