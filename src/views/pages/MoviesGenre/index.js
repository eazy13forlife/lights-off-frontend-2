import React from "react";
import { useSearchParams } from "react-router-dom";

import MoviesPageLayout from "../../../components/MoviesPageLayout";
import MainBody from "./MainBody";
import useSearchData from "../../../hooks/useSearchData";
import { getSearchResponse } from "./helperFunctions";
import "./index.scss";

const MoviesGenre = () => {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("id");

  const pageNumber = searchParams.get("page");

  const searchData = useSearchData(
    { searchValue, pageNumber: +pageNumber },
    getSearchResponse
  );

  return (
    <div className="MoviesGenre">
      <MoviesPageLayout>
        <MainBody searchData={searchData} />
      </MoviesPageLayout>
    </div>
  );
};

export default MoviesGenre;
