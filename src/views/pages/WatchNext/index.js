import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import { useSearchParams } from "react-router-dom";
import useSearchResponse from "./useSearchResponse";
import useSearchData from "../../../hooks/useSearchData";

import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
const WatchNext = () => {
  const [searchParams] = useSearchParams();

  const onPageButtonClick = useOnPageButtonClick();

  const page = searchParams.get("page");

  const getSearchResponse = useSearchResponse();

  const searchData = useSearchData({ pageNumber: page }, getSearchResponse);

  return (
    <div className="WatchNext">
      <ContentPageLayout
        searchBarPlaceholder="Search for watch next..."
        // onSearchSubmit={(e, searchValue) => {
        //   e.preventDefault();
        //   navigate(`/search/?name=${searchValue}&page=1`);
        // }}
      >
        <PaginatedContentGroup
          {...searchData}
          subject="Watch Next"
          onPageButtonClick={onPageButtonClick}
        />
      </ContentPageLayout>
    </div>
  );
};

export default WatchNext;
