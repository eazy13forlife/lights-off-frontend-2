import React from "react";
import { useNavigate } from "react-router-dom";
import ContentGroup from "../ContentGroup";
import ContentCard from "../ContentCard";
import PagesButtons from "../PagesButtons";
import "./index.scss";

const PaginatedContentGroup = ({
  results,
  searchValue,
  subject,
  totalNumberPages,
  currentPage,
  mediaType,
  onPageButtonClick,
}) => {
  const onPreviousPageClick = () => {
    //only call function when we are not on the first page
    if (currentPage !== 1) {
      const newPage = currentPage - 1;

      onPageButtonClick(searchValue, newPage);
    }
  };

  const onNextPageClick = () => {
    //only call function when we are not on the last page
    if (currentPage !== totalNumberPages) {
      const newPage = currentPage + 1;

      onPageButtonClick(searchValue, newPage);
    }
  };

  const onDirectPageNumberChange = (pageNumber) => {
    pageNumber = +pageNumber;

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalNumberPages) {
      return;
    }

    onPageButtonClick(searchValue, pageNumber);
  };

  const renderedResults = results.map((media) => {
    if (media.media_type) {
      return <ContentCard data={{ ...media }} key={media.id} />;
    } else {
      return (
        <ContentCard
          data={{ ...media, media_type: mediaType }}
          key={media.id}
        />
      );
    }
  });

  return (
    <>
      <div className="ContentGroupContainer">
        <ContentGroup
          title={`All results for "${subject}" `}
          content={renderedResults}
        />
        {!results.length ? (
          <p className="ContentGroup__blank heading-large color-light">
            No results found
          </p>
        ) : null}
      </div>

      <PagesButtons
        currentPage={currentPage}
        totalPages={totalNumberPages}
        onNextClick={onNextPageClick}
        onPreviousClick={onPreviousPageClick}
        onDirectPageNumberChange={onDirectPageNumberChange}
      />
    </>
  );
};

export default PaginatedContentGroup;
