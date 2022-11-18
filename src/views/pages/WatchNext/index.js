import React, { useState } from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import { useSearchParams } from "react-router-dom";
import useSearchResponse from "./useSearchResponse";
import useSearchData from "../../../hooks/useSearchData";
import { BACKEND_URL } from "../../../constants";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import useSearchDataModified from "../../../hooks/useSearchDataModified";
const WatchNext = () => {
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
          removable={{
            base: `${BACKEND_URL}/watch-next`,
            updateData() {
              setDataModified(true);
            },
          }}
        />
      </ContentPageLayout>
    </div>
  );
};

export default WatchNext;
