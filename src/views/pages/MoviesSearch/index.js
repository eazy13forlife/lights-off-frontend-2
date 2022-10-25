import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import apiKeys from "../../../api";
import MoviePageLayout from "../../../components/MoviesPageLayout";
import MainBody from "./MainBody";
import "./index.scss";

const MoviesSearch = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  const pageNumber = searchParams.get("page");

  const [searchData, setSearchData] = useState({
    results: [],
    searchValue: name,
    totalNumberResults: 0,
    totalNumberPages: 0,
    currentPage: pageNumber,
  });

  useEffect(() => {
    const getSearchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKeys.theMovieDb}&language=en-US&page=${pageNumber}&include_adult=false&query=${name}`
      );

      setSearchData({
        results: response.data.results,
        searchValue: name,
        totalNumberResults: response.data.total_results,
        totalNumberPages: response.data.total_pages,
        currentPage: pageNumber,
      });
    };

    getSearchData();
  }, []);

  return (
    <div className="MoviesSearch">
      <MoviePageLayout>
        <MainBody searchData={searchData} />
      </MoviePageLayout>
    </div>
  );
};

export default MoviesSearch;
