import { combineReducers } from "redux";

import userInfoReducer from "./userInfo.js";
import signUpErrorsBackend from "./signUpErrorsBackend";
import loginErrorsBackend from "./loginErrorsBackend";
import logoutErrorBackend from "./logoutErrorBackend";
import isAttemptingLogin from "./isAttemptingLogin";
import isAttemptingSignup from "./isAttemptingSignup";

export default combineReducers({
  userInfo: userInfoReducer,
  signUpErrorsBackend,
  loginErrorsBackend,
  logoutErrorBackend,
  isAttemptingLogin,
  isAttemptingSignup,
});
