import { combineReducers } from "redux";

import userInfoReducer from "./userInfo.js";
import signUpErrorsBackend from "./signUpErrorsBackend";
import loginErrorsBackend from "./loginErrorsBackend";
import logoutErrorBackend from "./logoutErrorBackend";
import trending from "./trending";

export default combineReducers({
  userInfo: userInfoReducer,
  signUpErrorsBackend,
  loginErrorsBackend,
  logoutErrorBackend,
  trending,
});
