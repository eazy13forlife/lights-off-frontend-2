import axios from "axios";

import types from "./types";

const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/signup",
        userData
      );

      console.log(response);

      dispatch({
        type: types.CREATE_USER,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export { createUser };
