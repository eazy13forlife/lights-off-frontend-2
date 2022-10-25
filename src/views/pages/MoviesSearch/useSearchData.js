import React, { useState, useEffect } from "react";
import axios from "axios";

import apiKeys from "../../../api";

const useSearchData = (searchValue, pageNumber) => {
  const [searchData, setSearchData] = useState({
    results: [],
    searchValue: searchValue,
    totalNumberResults: 0,
    totalNumberPages: 0,
    currentPage: 0,
  });

  useEffect(() => {
    const getSearchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKeys.theMovieDb}&language=en-US&page=${pageNumber}&include_adult=false&query=${searchValue}`
      );

      setSearchData({
        results: response.data.results,
        searchValue: searchValue,
        totalNumberResults: response.data.total_results,
        totalNumberPages: response.data.total_pages,
        currentPage: response.data.total_pages === 0 ? 0 : pageNumber,
      });
    };

    getSearchData();
  }, [searchValue, pageNumber]);

  return searchData;
};

export default useSearchData;
