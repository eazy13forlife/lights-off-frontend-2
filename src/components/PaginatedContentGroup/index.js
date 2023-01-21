import React from "react";

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
  removable,
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

  const getLoadingScreen = () => {
    //results is null when our request hasn't even been made yet
    if (!results) {
      return (
        <p className="ContentGroup__blank body-medium color-light">
          Searching...
        </p>
      );
    }
    if (!results.length) {
      return (
        <p className="ContentGroup__blank heading-large color-light">
          No results found
        </p>
      );
    }

    if (results.length) {
      return null;
    }
  };

  let renderedResults;

  if (!results) {
    renderedResults = [];
  } else {
    renderedResults = results.map((media) => {
      //if backend data(theres a media_id property), get that and turn to a mediaObject recognized by front end, which is designed to use the fields of the imdb api
      if (media.media_id) {
        const data = createDataObjectFrontEnd(media);
        return <ContentCard data={data} key={data.id} removable={removable} />;
      }

      //if not our backend data(so no media_id property) but imdb data, we can use it as it is. If we dont provide a media_type that means data already contains it, so it will override our undefined. Otherwise, what we provided will stay
      if (!media.media_id) {
        return (
          <ContentCard
            data={{ media_type: mediaType, ...media }}
            key={media.id}
            removable={removable}
          />
        );
      }
    });
  }

  return (
    <>
      <div className="ContentGroupContainer">
        <ContentGroup
          title={`All results for "${subject}" `}
          content={renderedResults}
        />
        {getLoadingScreen()}
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
