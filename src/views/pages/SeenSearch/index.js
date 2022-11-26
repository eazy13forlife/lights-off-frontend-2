import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

//import useSearchData from "./useSearchData";
import SeenPageLayout from "../../../components/SeenPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import useSearchDataModified from "../../../hooks/useSearchDataModified";
import useSearchResponse from "./useSearchResponse";
import { BACKEND_URL } from "../../../constants";

const SeenSearch = () => {
  const [dataModified, setDataModified] = useState(false);

  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("name");

  const pageNumber = searchParams.get("page");

  const getSearchResponse = useSearchResponse();

  const [searchData] = useSearchDataModified(
    { searchValue: searchValue, pageNumber: +pageNumber },
    getSearchResponse,
    {
      modified: dataModified,
      modify: setDataModified,
    }
  );

  const onPageButtonClick = useOnPageButtonClick();

  return (
    <div className="SeenSearch">
      <SeenPageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject={searchData.searchValue}
          onPageButtonClick={onPageButtonClick}
          removable={{
            base: `${BACKEND_URL}/seen`, //base url to delete a seen item
            updateData() {
              setDataModified(true);
            },
          }}
        />
      </SeenPageLayout>
    </div>
  );
};

export default SeenSearch;
