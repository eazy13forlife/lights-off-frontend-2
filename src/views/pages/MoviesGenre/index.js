import React from "react";
import { useSearchParams } from "react-router-dom";

import MoviesPageLayout from "../../../components/MoviesPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import { movieGenres } from "../../../components/Genres/helpers";
import useSearchData from "../../../hooks/useSearchData";
import { getSearchResponse } from "./helperFunctions";

const MoviesGenre = () => {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("id");

  const pageNumber = searchParams.get("page");

  const [searchData] = useSearchData(
    { searchValue, pageNumber: +pageNumber },
    getSearchResponse
  );

  const onPageButtonClick = useOnPageButtonClick();

  return (
    <div className="MoviesGenre">
      <MoviesPageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject={movieGenres[searchData.searchValue].genre}
          mediaType="movie"
          onPageButtonClick={onPageButtonClick}
        />
      </MoviesPageLayout>
    </div>
  );
};

export default MoviesGenre;
