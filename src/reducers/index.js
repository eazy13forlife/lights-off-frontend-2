import { combineReducers } from "redux";

import userInfoReducer from "./userInfo.js";
import signUpErrorsBackend from "./signUpErrorsBackend";

export default combineReducers({
  userInfo: userInfoReducer,
  signUpErrorsBackend,
});
