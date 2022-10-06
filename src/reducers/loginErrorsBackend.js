import types from "../actions/types";

const loginErrorsBackend = (state = null, action) => {
  switch (action.type) {
    case types.SEND_LOGIN_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default loginErrorsBackend;
