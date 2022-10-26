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
  totalNumberResults,
  totalNumberPages,
  currentPage,
  mediaType,
  onPageButtonClick,
}) => {
  const navigate = useNavigate();

  const onPreviousPageClick = () => {
    //ensures new page does not go below 1
    const newPage = Math.max(1, currentPage - 1);

    onPageButtonClick(searchValue, newPage);
  };

  const onNextPageClick = () => {
    //ensures new page does not go past total pages
    const newPage = Math.min(totalNumberPages, currentPage + 1);

    onPageButtonClick(searchValue, newPage);
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
