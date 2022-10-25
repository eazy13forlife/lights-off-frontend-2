import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

//import useSearchResults from "./useSearchResults";
import { getSearchResponse } from "./helperFunctions";
import useSearchData from "../../../hooks/useSearchData";
import MainBody from "./MainBody";
import ContentPageLayout from "../../../components/ContentPageLayout";
import "./index.scss";

const HomeSearch = () => {
  const navigate = useNavigate();

  const [location] = useSearchParams();

  const searchValue = location.get("searchValue");

  const pageNumber = location.get("page");

  const searchResults = useSearchData(
    { searchValue: searchValue, pageNumber: +pageNumber },
    getSearchResponse
  );

  return (
    <div className="HomeSearch">
      <ContentPageLayout
        searchBarPlaceholder="Search for movies, tv and people..."
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/search/?searchValue=${searchValue}&page=1`);
        }}
      >
        <MainBody searchResults={searchResults} />
      </ContentPageLayout>
    </div>
  );
};

export default HomeSearch;
