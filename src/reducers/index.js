import { combineReducers } from "redux";

import userInfoReducer from "./userInfo.js";
import signUpErrorsBackend from "./signUpErrorsBackend";
import loginErrorsBackend from "./loginErrorsBackend";

export default combineReducers({
  userInfo: userInfoReducer,
  signUpErrorsBackend,
  loginErrorsBackend,
});
