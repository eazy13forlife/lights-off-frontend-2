import React, { useState, useEffect } from "react";
import apiKeys from "../../../api";
import axios from "axios";

const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState({
    movie: {},
    cast: [],
  });

  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return response.data;
    };

    const getCastDetails = async () => {
      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return creditsResponse.data.cast;
    };

    Promise.all([getMovieDetails(), getCastDetails()]).then((results) => {
      setMovieDetails({
        movie: results[0],
        cast: results[1],
      });
    });
  }, []);

  return movieDetails;
};
export default useMovieDetails;
