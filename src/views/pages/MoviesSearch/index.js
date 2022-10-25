import React from "react";
import { useSearchParams } from "react-router-dom";

//import useSearchData from "./useSearchData";
import MoviePageLayout from "../../../components/MoviesPageLayout";
import MainBody from "./MainBody";
import useSearchData from "../../../hooks/useSearchData";
import { getSearchResponse } from "./helperFunctions";

import "./index.scss";

const MoviesSearch = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  const pageNumber = searchParams.get("page");

  const searchData = useSearchData(
    { searchValue: name, pageNumber: +pageNumber },
    getSearchResponse
  );

  return (
    <div className="MoviesSearch">
      <MoviePageLayout>
        <MainBody searchData={searchData} />
      </MoviePageLayout>
    </div>
  );
};

export default MoviesSearch;
