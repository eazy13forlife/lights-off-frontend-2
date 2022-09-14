import types from "../actions/types.js";

const signUpErrorsBackend = (state = null, action) => {
  switch (action.type) {
    case types.SEND_CREATE_USER_ERROR:
      return action.payload;
    case types.REMOVE_CREATE_USER_ERROR:
      return null;
    default:
      return state;
  }
};

export default signUpErrorsBackend;
