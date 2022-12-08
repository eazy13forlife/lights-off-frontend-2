import { useState, useEffect } from "react";
import axios from "axios";

import apiKeys from "../../../api";

const usePersonDetails = (personId) => {
  const [details, setDetails] = useState({});

  const [credits, setCredits] = useState({
    movie: [],
    tv: [],
  });

  useEffect(() => {
    const getPersonDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      setDetails(response.data);
    };

    getPersonDetails();
  }, []);

  useEffect(() => {
    const getPersonDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      setDetails(response.data);
    };

    const getMovieCredits = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return [...response.data.cast, ...response.data.crew];
    };

    const getTvCredits = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return [...response.data.cast, ...response.data.crew];
    };

    getPersonDetails();

    Promise.all([getMovieCredits(), getTvCredits()]).then((results) => {
      setCredits({
        movie: results[0],
        tv: results[1],
      });
    });
  }, []);

  return [details, credits];
};

export default usePersonDetails;
