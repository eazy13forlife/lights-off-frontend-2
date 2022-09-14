import types from "../actions/types.js";

const initialState = {
  email: "",
  username: "",
  authToken: "",
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER: {
      const authToken = action.payload.authToken;

      const { email, username } = action.payload.insertedUser;

      return { email, username, authToken };
    }
    default:
      return state;
  }
};

export default userInfoReducer;
