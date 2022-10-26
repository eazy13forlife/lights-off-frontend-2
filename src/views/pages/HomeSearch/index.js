import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

//import useSearchResults from "./useSearchResults";
import { getSearchResponse } from "./helperFunctions";
import useSearchData from "../../../hooks/useSearchData";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import HomePageLayout from "../../../components/HomePageLayout";
import "./index.scss";

const HomeSearch = () => {
  const [location] = useSearchParams();

  const searchValue = location.get("name");

  const pageNumber = location.get("page");

  const searchData = useSearchData(
    { searchValue: searchValue, pageNumber: +pageNumber },
    getSearchResponse
  );

  const onPageButtonClick = useOnPageButtonClick();

  return (
    <div className="HomeSearch">
      <HomePageLayout>
        <PaginatedContentGroup
          {...searchData}
          subject={searchData.searchValue}
          onPageButtonClick={onPageButtonClick}
        />
      </HomePageLayout>
    </div>
  );
};

export default HomeSearch;
