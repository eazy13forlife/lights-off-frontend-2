import axios from "axios";

import types from "./types";
import apiKeys from "../api";

const getTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKeys.theMovieDb}`
  );

  return response.data.results;
};

const getTrendingTv = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKeys.theMovieDb}`
  );

  return response.data.results;
};

const getTrendingPeople = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/person/day?api_key=${apiKeys.theMovieDb}`
  );

  return response.data.results;
};

const getTrending = () => {
  return async (dispatch) => {
    const allTrending = {
      movies: [],
      tv: [],
      people: [],
    };

    const trendingData = await Promise.all([
      getTrendingMovies(),

      getTrendingTv(),

      getTrendingPeople(),
    ]);

    trendingData.forEach((_, index) => {
      if (index === 0) {
        allTrending.movies = trendingData[0];
      }

      if (index === 1) {
        allTrending.tv = trendingData[1];
      }

      if (index === 2) {
        allTrending.people = trendingData[2];
      }
    });

    dispatch({
      type: types.GET_TRENDING,
      payload: allTrending,
    });
    /*
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
    */
  };
};

export default getTrending;
