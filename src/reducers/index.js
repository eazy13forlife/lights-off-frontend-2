import { combineReducers } from "redux";

import userInfoReducer from "./userInfo.js";

export default combineReducers({
  userInfo: userInfoReducer,
});
