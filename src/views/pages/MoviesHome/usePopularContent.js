import React, { useState, useEffect } from "react";
import axios from "axios";

import ContentCard from "../../../components/ContentCard";
import apiKeys from "../../../api";

const usePopularContent = () => {
  const [popularContent, setPopularContent] = useState({
    topRated: [],
    nowPlaying: [],
    popular: [],
    upcoming: [],
    trending: [],
  });

  useEffect(() => {
    const getTopRated = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`
      );
      return response.data.results.slice(0, 10);
      //setTopRated(response.data.results.slice(0, 8));
    };

    const getNowPlaying = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`
      );
      return response.data.results.slice(0, 10);
      //setNowPlaying(response.data.results.slice(0, 8));
    };

    const getPopular = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`
      );
      return response.data.results.slice(0, 10);
      //setPopular(response.data.results.slice(0, 8));
    };

    const getUpcoming = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`
      );
      return response.data.results.slice(0, 10);
      //setUpcoming(response.data.results.slice(0, 8));
    };

    const getTrending = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_DB_API}`
      );
      return response.data.results.slice(0, 10);
      //setTrending(response.data.results.slice(0, 8));
    };
    /*
    getTopRated()
      .then(() => {
        return getNowPlaying();
      })
      .then(() => {
        return getPopular();
      })
      .then(() => {
        return getUpcoming();
      })
      .then(() => {
        return getTrending();
      });
      */

    Promise.all([
      getTopRated(),
      getNowPlaying(),
      getPopular(),
      getUpcoming(),
      getTrending(),
    ]).then((values) => {
      setPopularContent({
        topRated: values[0],
        nowPlaying: values[1],
        popular: values[2],
        upcoming: values[3],
        trending: values[4],
      });
      /*
      setTopRated(values[0]);
      setNowPlaying(values[1]);
      setPopular(values[2]);
      setUpcoming(values[3]);
      setTrending(values[4]);
      */
    });
  }, []);

  const renderedTopRated = popularContent.topRated.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "movie" }} key={data.id} />
    );
  });

  const renderedNowPlaying = popularContent.nowPlaying.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "movie" }} key={data.id} />
    );
  });

  const renderedPopular = popularContent.popular.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "movie" }} key={data.id} />
    );
  });

  const renderedUpcoming = popularContent.upcoming.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "movie" }} key={data.id} />
    );
  });

  const renderedTrending = popularContent.trending.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "movie" }} key={data.id} />
    );
  });

  return [
    renderedTopRated,
    renderedNowPlaying,
    renderedPopular,
    renderedUpcoming,
    renderedTrending,
  ];
};

export default usePopularContent;
