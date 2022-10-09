import React, { useState, useEffect } from "react";
import axios from "axios";

const useTrendingMedia = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    let everything = [];

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

    Promise.all([
      getTrendingMovies(),
      getTrendingTv(),
      getTrendingPeople(),
    ]).then((data) => {
      data.forEach((array) => {
        everything = everything.concat(array);
      });
      console.log(everything);
    });
  }, []);

  return media;
};

export default useTrendingMedia;
