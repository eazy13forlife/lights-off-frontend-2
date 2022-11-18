import React from "react";
import { useSearchParams } from "react-router-dom";
import TvPageLayout from "../../../components/TvPageLayout";
import useSearchData from "../../../hooks/useSearchData";
import { getSearchResponse } from "./helperFunctions";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const TvSearch = () => {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("name");

  const pageNumber = +searchParams.get("page");

  const [searchData] = useSearchData(
    { searchValue, pageNumber },
    getSearchResponse
  );

  const onPageButtonClick = useOnPageButtonClick();

  return (
    <div className="TvSearch">
      <TvPageLayout>
        <PaginatedContentGroup
          {...searchData}
          mediaType="tv"
          subject={searchData.searchValue}
          onPageButtonClick={onPageButtonClick}
        />
      </TvPageLayout>
    </div>
  );
};

export default TvSearch;
