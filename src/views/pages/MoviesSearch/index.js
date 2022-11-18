import React from "react";
import { useSearchParams } from "react-router-dom";

//import useSearchData from "./useSearchData";
import MoviePageLayout from "../../../components/MoviesPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import useSearchData from "../../../hooks/useSearchData";
import { getSearchResponse } from "./helperFunctions";

const MoviesSearch = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  const pageNumber = searchParams.get("page");

  const [searchData] = useSearchData(
    { searchValue: name, pageNumber: +pageNumber },
    getSearchResponse
  );

  const onPageButtonClick = useOnPageButtonClick();

  return (
    <div className="MoviesSearch">
      <MoviePageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject={searchData.searchValue}
          mediaType="movie"
          onPageButtonClick={onPageButtonClick}
        />
      </MoviePageLayout>
    </div>
  );
};

export default MoviesSearch;
