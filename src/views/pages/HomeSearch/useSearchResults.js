import React, { useState, useEffect } from "react";
import axios from "axios";

import apiKeys from "../../../api";

const useSearchResults = (searchValue, pageNumber) => {
  const [searchResults, setSearchResults] = useState({
    searchValue,
    pageNumber,
  });

  useEffect(() => {
    const getValues = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKeys.theMovieDb}&language=en-US&page=${pageNumber}&include_adult=false&query=${searchValue}`
      );

      setSearchResults({
        results: response.data.results,
        totalNumberResults: response.data.total_results,
        totalNumberPages: response.data.total_pages,
        searchValue: searchValue,
        currentPage: pageNumber,
      });
    };

    getValues();
  }, [searchValue, pageNumber]);

  return [searchResults];
};

export default useSearchResults;
