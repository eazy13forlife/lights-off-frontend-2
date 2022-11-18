import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { BACKEND_URL } from "../../../constants";
import useSearchResponse from "./useSearchResponse";
import useSearchDataModified from "../../../hooks/useSearchDataModified";
import ContentPageLayout from "../../../components/ContentPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const Favorites = () => {
  const [dataModified, setDataModified] = useState(false);

  const [searchParams] = useSearchParams();

  const onPageButtonClick = useOnPageButtonClick();

  const page = +searchParams.get("page");

  const getSearchResponse = useSearchResponse();

  const [searchData] = useSearchDataModified(
    { pageNumber: page },
    getSearchResponse,
    {
      modified: dataModified,
      modify: setDataModified,
    }
  );

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
            updateData() {
              setDataModified(true);
            },
          }}
        />
      </ContentPageLayout>
    </div>
  );
};

export default Favorites;
