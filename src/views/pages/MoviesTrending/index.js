import React from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchResponse } from "./helperFunctions";
import useSearchData from "../../../hooks/useSearchData";
import MoviesPageLayout from "../../../components/MoviesPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const MoviesTrending = () => {
  const onPageButtonClick = useOnPageButtonClick();

  const [searchParams] = useSearchParams();

  const pageNumber = +searchParams.get("page");

  const [searchData] = useSearchData(
    { searchValue: "movie", pageNumber: pageNumber },
    getSearchResponse
  );

  return (
    <MoviesPageLayout>
      <PaginatedContentGroup
        {...searchData}
        subject="Trending Movies"
        mediaType="movie"
        onPageButtonClick={onPageButtonClick}
      />
    </MoviesPageLayout>
  );
};

export default MoviesTrending;
