import { useState, useEffect } from "react";
import axios from "axios";

import apiKeys from "../../../api";

const usePersonDetails = (personId) => {
  const [details, setDetails] = useState({});

  const [credits, setCredits] = useState({
    movie: [],
    tv: [],
  });

  const addUniqueCredits = (seenCredits, allCredits, mediaObj) => {
    mediaObj.forEach((obj) => {
      if (!(obj.id in seenCredits)) {
        seenCredits[obj.id] = true;
        allCredits.push(obj);
      }
    });
  };

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
      const moviesSeen = {};

      const allCredits = [];

      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      addUniqueCredits(moviesSeen, allCredits, response.data.cast);

      addUniqueCredits(moviesSeen, allCredits, response.data.crew);

      return allCredits;
    };

    const getTvCredits = async () => {
      const tvSeen = {};

      const allCredits = [];

      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      addUniqueCredits(tvSeen, allCredits, response.data.cast);

      addUniqueCredits(tvSeen, allCredits, response.data.crew);

      return allCredits;
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
