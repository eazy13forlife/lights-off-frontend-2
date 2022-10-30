import React from "react";
import { useSearchParams } from "react-router-dom";

//import useSearchData from "./useSearchData";
import PeoplePageLayout from "../../../components/PeoplePageLayout";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import useSearchData from "../../../hooks/useSearchData";
import { getSearchResponse } from "./helperFunctions";

const PeopleSearch = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  const pageNumber = searchParams.get("page");

  const searchData = useSearchData(
    { searchValue: name, pageNumber: +pageNumber },
    getSearchResponse
  );

  const onPageButtonClick = useOnPageButtonClick();

  return (
    <div className="PeopleSearch">
      <PeoplePageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject={searchData.searchValue}
          mediaType="person"
          onPageButtonClick={onPageButtonClick}
        />
      </PeoplePageLayout>
    </div>
  );
};

export default PeopleSearch;
