import React from "react";
import { useSearchParams } from "react-router-dom";

import { getSearchResponse } from "./helperFunctions";
import useSearchData from "../../../hooks/useSearchData";
import PeoplePageLayout from "../../../components/PeoplePageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import "../sharedStyles/home.scss";

const PeoplePopular = () => {
  const onPageButtonClick = useOnPageButtonClick();

  const [searchParams] = useSearchParams();

  const pageNumber = +searchParams.get("page");

  const [searchData] = useSearchData(
    { searchValue: "person", pageNumber: pageNumber },
    getSearchResponse
  );

  return (
    <div className="PeoplePopular">
      <PeoplePageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject="Popular People"
          mediaType="person"
          onPageButtonClick={onPageButtonClick}
        />
      </PeoplePageLayout>
    </div>
  );
};

export default PeoplePopular;
