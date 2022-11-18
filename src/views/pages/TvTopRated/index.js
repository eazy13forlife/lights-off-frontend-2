import React from "react";
import { useSearchParams } from "react-router-dom";

import { getSearchResponse } from "./helperFunctions";
import useSearchData from "../../../hooks/useSearchData";
import TvPageLayout from "../../../components/TvPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const TvTopRated = () => {
  const onPageButtonClick = useOnPageButtonClick();

  const [searchParams] = useSearchParams();

  const pageNumber = +searchParams.get("page");

  const [searchData] = useSearchData(
    { searchValue: "tv", pageNumber: pageNumber },
    getSearchResponse
  );

  return (
    <TvPageLayout>
      <PaginatedContentGroup
        {...searchData}
        subject="Top Rated TV"
        mediaType="tv"
        onPageButtonClick={onPageButtonClick}
      />
    </TvPageLayout>
  );
};

export default TvTopRated;
