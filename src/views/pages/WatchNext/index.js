import React, { useState } from "react";

import WatchNextPageLayout from "../../../components/WatchNextPageLayout";
import { useSearchParams } from "react-router-dom";
import useSearchResponse from "./useSearchResponse";
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
      <WatchNextPageLayout>
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
      </WatchNextPageLayout>
    </div>
  );
};

export default WatchNext;
