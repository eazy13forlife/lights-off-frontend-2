import types from "../actions/types";

const isAttemptingSignup = (state = false, action) => {
  switch (action.type) {
    case types.START_SIGNUP:
      return true;
    case types.END_SIGNUP:
      return false;
    default:
      return state;
  }
};

export default isAttemptingSignup;
