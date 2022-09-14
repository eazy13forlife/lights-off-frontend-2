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

const sendCreateUserError = (message) => {
  return {
    type: types.SEND_CREATE_USER_ERROR,
    payload: message,
  };
};

export { createUser };
