import types from "../actions/types";

const isAttemptingLogin = (state = false, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return true;
    case types.END_LOGIN:
      return false;
    default:
      return state;
  }
};

export default isAttemptingLogin;
