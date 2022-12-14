import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

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
        `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
      );

      setDetails(response.data);
    };

    getPersonDetails();
  }, []);

  useEffect(() => {
    const getPersonDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
      );

      setDetails(response.data);
    };

    const getMovieCredits = async () => {
      const moviesSeen = {};

      const allCredits = [];

      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
      );

      //add all the unique credits to an array
      addUniqueCredits(moviesSeen, allCredits, response.data.cast);

      addUniqueCredits(moviesSeen, allCredits, response.data.crew);

      //sort credits by latest credits first
      allCredits.sort((a, b) => {
        //if a has a release date and b doesn't show a first so -1
        if (a.release_date && !b.release_date) {
          return -1;
        }

        //if a doesnt have a release date and b does, show b first so 1
        if (!a.release_date && b.release_date) {
          return 1;
        }

        if (moment(a.release_date).unix() > moment(b.release_date).unix()) {
          return -1;
        } else if (
          moment(a.release_date).unix() < moment(b.release_date).unix()
        ) {
          return 1;
        } else {
          return 0;
        }
      });
      return allCredits;
    };

    const getTvCredits = async () => {
      const tvSeen = {};

      const allCredits = [];

      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
      );

      addUniqueCredits(tvSeen, allCredits, response.data.cast);

      addUniqueCredits(tvSeen, allCredits, response.data.crew);

      //sort credits by latest credits first
      allCredits.sort((a, b) => {
        if (a.first_air_date && !b.first_air_date) {
          return -1;
        }

        if (!a.first_air_date && b.first_air_date) {
          return 1;
        }

        if (moment(a.first_air_date).unix() > moment(b.first_air_date).unix()) {
          return -1;
        } else if (
          moment(a.first_air_date).unix() < moment(b.first_air_date).unix()
        ) {
          return 1;
        } else {
          return 0;
        }
      });

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
