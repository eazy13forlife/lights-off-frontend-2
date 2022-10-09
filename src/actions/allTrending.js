import axios from "axios";

import types from "./types";
import { randomizeArray } from "../helperFunctions";

const getTrendingMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=aa7835518306593feca1d43f01ae2cb2"
  );

  return response.data.results;
};

const getTrendingTv = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=aa7835518306593feca1d43f01ae2cb2"
  );

  return response.data.results;
};

const getTrendingPeople = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/person/day?api_key=aa7835518306593feca1d43f01ae2cb2"
  );

  return response.data.results;
};

const getTrending = () => {
  return async (dispatch) => {
    const allTrending = [];

    const trendingData = await Promise.all([
      getTrendingMovies(),

      getTrendingTv(),

      getTrendingPeople(),
    ]);

    trendingData.forEach((trendingGroup) => {
      allTrending.push(...trendingGroup);
    });

    randomizeArray(allTrending);

    dispatch({
      type: types.GET_TRENDING,
      payload: allTrending,
    });
  };
};

export default getTrending;
