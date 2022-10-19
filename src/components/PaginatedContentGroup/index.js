import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiKeys from "../../api";
import ContentGroup from "../ContentGroup";
import RenderedContentCard from "../../views/pages/Home/RenderedContentCard";
import PagesButtons from "../PagesButtons";
import "./index.scss";

const PaginatedContentGroup = ({
  initialResults,
  searchValue,
  totalNumberResults,
  totalNumberPages,
  currentPage,
}) => {
  const navigate = useNavigate();

  const onPreviousPageClick = () => {
    //ensures new page does not go below 1
    const newPage = Math.max(1, currentPage - 1);

    navigate(`/search?searchValue=${searchValue}&page=${newPage}`);
  };

  const onNextPageClick = () => {
    //ensures new page does not go past total pages
    const newPage = Math.min(totalNumberPages, currentPage + 1);

    navigate(`/search?searchValue=${searchValue}&page=${newPage}`);
  };

  const renderedResults = initialResults.map((media) => {
    return <RenderedContentCard data={media} key={media.id} />;
  });

  return (
    <>
      <ContentGroup
        title={`Found ${totalNumberResults} results for ${searchValue} `}
        content={renderedResults}
      />
      <PagesButtons
        currentPage={currentPage}
        totalPages={totalNumberPages}
        onNextClick={onNextPageClick}
        onPreviousClick={onPreviousPageClick}
      />
    </>
  );
};

export default PaginatedContentGroup;
