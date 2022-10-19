import React, { useState } from "react";
import axios from "axios";

import RenderedContentCard from "./RenderedContentCard";
import apiKeys from "../../../api";

const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState(null);

  const onSearchSubmit = async (e, searchValue) => {
    e.preventDefault();

    //if nothing was entered, just set searchResults to null
    if (searchValue.trim() === "") {
      return setSearchResults(null);
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKeys.theMovieDb}&language=en-US&page=1&include_adult=false&query=${searchValue}`
    );

    setSearchResults({
      results: response.data.results,
      totalNumberResults: response.data.total_results,
      totalNumberPages: response.data.total_pages,
      searchValue: searchValue,
    });
  };

  return [searchResults, onSearchSubmit];
};

export default useSearchResults;
