import types from "../actions/types.js";
import { saveToLocalStorage } from "../helperFunctions";

//current initial state
let initialState = null;

//see if a userInfo exists in localStorage
const userInfo = localStorage.getItem("userInfo");

//if it exists, make it the initial userInfo object
if (userInfo) {
  initialState = JSON.parse(userInfo);
}

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER:
    case types.LOGIN_USER: {
      const authToken = action.payload.authToken;

      const { email, username } = action.payload.user;

      const newUserInfo = { email, username, authToken };

      saveToLocalStorage("userInfo", newUserInfo);

      return newUserInfo;
    }

    default:
      return state;
  }
};

export default userInfoReducer;
