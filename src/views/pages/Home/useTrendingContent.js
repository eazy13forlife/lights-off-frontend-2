import React, { useState, useEffect } from "react";
import axios from "axios";

import ContentCard from "../../../components/ContentCard";

const useTrendingContent = () => {
  const [trending, setTrending] = useState({
    movies: [],
    tv: [],
    people: [],
  });

  useEffect(() => {
    const getTrendingMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_DB_API}`
      );
      return response.data.results;
      //setTrending(response.data.results.slice(0, 8));
    };

    const getTrendingTv = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_MOVIE_DB_API}`
      );

      return response.data.results;
    };

    const getTrendingPeople = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_MOVIE_DB_API}`
      );

      return response.data.results;
    };

    Promise.all([
      getTrendingMovies(),
      getTrendingTv(),
      getTrendingPeople(),
    ]).then((results) => {
      setTrending({
        movies: results[0],
        tv: results[1],
        people: results[2],
      });
    });
  }, []);

  //get jsx of rendered movies,tv and people
  const renderedMovies = trending.movies.map((media) => {
    return <ContentCard data={media} key={media.id} />;
  });

  const renderedTv = trending.tv.map((media) => {
    return <ContentCard data={media} key={media.id} />;
  });

  const renderedPeople = trending.people.map((media) => {
    return <ContentCard data={media} key={media.id} />;
  });

  return [renderedMovies, renderedTv, renderedPeople];
};

export default useTrendingContent;
