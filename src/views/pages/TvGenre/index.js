import React from "react";
import { useSearchParams } from "react-router-dom";

import useSearchData from "../../../hooks/useSearchData";
import TvPageLayout from "../../../components/TvPageLayout";
import { getSearchResponse } from "./helperFunctions";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const TvGenre = () => {
  const onPageButtonClick = useOnPageButtonClick();

  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("id");

  const pageNumber = +searchParams.get("page");

  const genre = searchParams.get("name");

  const searchData = useSearchData(
    { searchValue, pageNumber },
    getSearchResponse
  );

  return (
    <div className="TvGenre">
      <TvPageLayout>
        <PaginatedContentGroup
          {...searchData}
          mediaType="tv"
          subject={genre}
          onPageButtonClick={onPageButtonClick}
        />
      </TvPageLayout>
    </div>
  );
};

export default TvGenre;
