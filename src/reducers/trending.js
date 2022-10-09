import types from "../actions/types";

const trendingReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_TRENDING:
      return action.payload;
    default:
      return state;
  }
};

export default trendingReducer;
