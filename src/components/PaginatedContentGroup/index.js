import React from "react";
import { useNavigate } from "react-router-dom";
import ContentGroup from "../ContentGroup";
import ContentCard from "../ContentCard";
import PagesButtons from "../PagesButtons";
import "./index.scss";

const PaginatedContentGroup = ({
  results,
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

  const renderedResults = results.map((media) => {
    return (
      <ContentCard data={{ ...media, media_type: "movie" }} key={media.id} />
    );
  });

  return (
    <>
      <div className="ContentGroupContainer">
        <ContentGroup
          title={`Found ${totalNumberResults} results for ${searchValue} `}
          content={renderedResults}
        />
      </div>

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
