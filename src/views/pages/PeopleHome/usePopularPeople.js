import React, { useState, useEffect } from "react";
import axios from "axios";

//import apiKeys from "../../../api";
import ContentCard from "../../../components/ContentCard";

const usePopularPeople = () => {
  const [popular, setPopular] = useState({
    trending: [],
    popular: [],
  });

  useEffect(() => {
    const getTrendingPeople = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/person/day?api_key=${process.env.REACT_APP_MOVIE_DB_API}`
      );

      return response.data.results;
    };

    const getPopularPeople = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
      );

      return response.data.results;
    };

    Promise.all([getTrendingPeople(), getPopularPeople()]).then((data) => {
      setPopular({
        trending: data[0],
        popular: data[1],
      });
    });
  }, []);

  const renderedTrendingPeople = popular.trending.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "person" }} key={data.id} />
    );
  });

  const renderedPopularPeople = popular.popular.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "person" }} key={data.id} />
    );
  });

  return [renderedTrendingPeople, renderedPopularPeople];
};
export default usePopularPeople;
