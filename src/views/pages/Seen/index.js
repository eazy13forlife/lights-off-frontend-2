import React, { useState } from "react";

import SeenPageLayout from "../../../components/SeenPageLayout";
import { useSearchParams } from "react-router-dom";
import useSearchResponse from "./useSearchResponse";
import useSearchDataModified from "../../../hooks/useSearchDataModified";
import { BACKEND_URL } from "../../../constants";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const Seen = () => {
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
    <div className="Seen">
      <SeenPageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject="Seen"
          onPageButtonClick={onPageButtonClick}
          removable={{
            base: `${BACKEND_URL}/seen`,
            updateData() {
              setDataModified(true);
            },
          }}
        />
      </SeenPageLayout>
    </div>
  );
};

export default Seen;
