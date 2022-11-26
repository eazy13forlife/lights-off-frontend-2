import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

//import useSearchData from "./useSearchData";
import FavoritesPageLayout from "../../../components/FavoritesPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import useSearchDataModified from "../../../hooks/useSearchDataModified";
import useSearchResponse from "./useSearchResponse";
import { BACKEND_URL } from "../../../constants";

const FavoritesSearch = () => {
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
    <div className="FavoritesSearch">
      <FavoritesPageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject={searchData.searchValue}
          onPageButtonClick={onPageButtonClick}
          removable={{
            base: `${BACKEND_URL}/favorites`, //base url to delete a favorited item
            updateData() {
              setDataModified(true);
            },
          }}
        />
      </FavoritesPageLayout>
    </div>
  );
};

export default FavoritesSearch;
