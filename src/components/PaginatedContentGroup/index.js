import React from "react";
import { useNavigate } from "react-router-dom";

import ContentGroup from "../ContentGroup";
import ContentCard from "../ContentCard";
import PagesButtons from "../PagesButtons";
import { createDataObjectFrontEnd } from "../../helperFunctions";
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
    //if backend data(theres a media_id property), get that and turn to a mediaObject recognized by front end, which is designed to use the fields of the imdb api
    if (media.media_id) {
      const data = createDataObjectFrontEnd(media);
      return <ContentCard data={data} key={data.id} />;
    }

    //if not our backend data(so no media_id property) but imdb data, we can use it as it is. If we dont provide a media_type that means data already contains it, so it will override our undefined. Otherwise, what we provided will stay
    if (!media.media_id) {
      return (
        <ContentCard
          data={{ media_type: mediaType, ...media }}
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
