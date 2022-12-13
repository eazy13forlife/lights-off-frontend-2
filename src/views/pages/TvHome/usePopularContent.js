import React, { useState, useEffect } from "react";
import axios from "axios";
//import apiKeys from "../../../api";
import ContentCard from "../../../components/ContentCard";

const usePopularContent = () => {
  const [popularContent, setPopularContent] = useState({
    popular: [],
    topRated: [],
    trending: [],
    onAir: [],
  });

  useEffect(() => {
    const getPopular = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`
      );

      return response.data.results.slice(0, 10);
    };

    const getTopRated = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`
      );

      return response.data.results.slice(0, 10);
    };

    const getTrending = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_MOVIE_DB_API}`
      );

      return response.data.results.slice(0, 10);
    };

    const getOnAir = async () => {
      const response = await axios.get(`
      https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`);

      return response.data.results.slice(0, 10);
    };

    Promise.all([getPopular(), getTopRated(), getTrending(), getOnAir()]).then(
      (results) => {
        setPopularContent({
          popular: results[0],
          topRated: results[1],
          trending: results[2],
          onAir: results[3],
        });
      }
    );
  }, []);

  const renderedPopular = popularContent.popular.map((data) => {
    return <ContentCard data={{ ...data, media_type: "tv" }} key={data.id} />;
  });

  const renderedTopRated = popularContent.topRated.map((data) => {
    return <ContentCard data={{ ...data, media_type: "tv" }} key={data.id} />;
  });

  const renderedTrending = popularContent.trending.map((data) => {
    return <ContentCard data={{ ...data, media_type: "tv" }} key={data.id} />;
  });

  const renderedOnAir = popularContent.onAir.map((data) => {
    return <ContentCard data={{ ...data, media_type: "tv" }} key={data.id} />;
  });

  return [renderedPopular, renderedTopRated, renderedTrending, renderedOnAir];
};

export default usePopularContent;
