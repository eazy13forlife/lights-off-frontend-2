import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

//import useSearchResults from "./useSearchResults";
import { getSearchResponse } from "./helperFunctions";
import useSearchData from "../../../hooks/useSearchData";
import MainBody from "./MainBody";
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

  return (
    <div className="HomeSearch">
      <HomePageLayout>
        <MainBody searchData={searchData} />
      </HomePageLayout>
    </div>
  );
};

export default HomeSearch;
