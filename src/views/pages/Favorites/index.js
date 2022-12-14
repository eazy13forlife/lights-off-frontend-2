import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../../../constants";
import useSearchResponse from "./useSearchResponse";
import useSearchDataModified from "../../../hooks/useSearchDataModified";
import FavoritesPageLayout from "../../../components/FavoritesPageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const Favorites = () => {
  const navigate = useNavigate();

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
      <FavoritesPageLayout>
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
      </FavoritesPageLayout>
    </div>
  );
};

export default Favorites;
