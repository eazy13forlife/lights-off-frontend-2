import React from "react";
import { useSearchParams } from "react-router-dom";

import { BACKEND_URL } from "../../../constants";
import useSearchResponse from "./useSearchResponse";
import useSearchData from "../../../hooks/useSearchData";
import ContentPageLayout from "../../../components/ContentPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const Favorites = () => {
  const [searchParams] = useSearchParams();

  const onPageButtonClick = useOnPageButtonClick();

  const page = +searchParams.get("page");

  const getSearchResponse = useSearchResponse();

  const searchData = useSearchData({ pageNumber: page }, getSearchResponse);

  return (
    <div className="Favorites">
      <ContentPageLayout
        searchBarPlaceholder="Search for favorites..."
        // onSearchSubmit={(e, searchValue) => {
        //   e.preventDefault();
        //   navigate(`/search/?name=${searchValue}&page=1`);
        // }}
      >
        <PaginatedContentGroup
          {...searchData}
          subject="Favorites"
          onPageButtonClick={onPageButtonClick}
          removable={{
            base: `${BACKEND_URL}/favorites`,
          }}
        />
      </ContentPageLayout>
    </div>
  );
};

export default Favorites;
