import types from "../actions/types";

const logoutErrorBackend = (state = null, action) => {
  switch (action.type) {
    case types.SEND_LOGOUT_ERROR:
      return "Error logging out user";
    case types.REMOVE_LOGOUT_ERROR:
      return null;
    default:
      return state;
  }
};

export default logoutErrorBackend;
