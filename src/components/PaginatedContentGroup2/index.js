import React, { useState, useEffect } from "react";

import ContentCard from "../ContentCard";
import PagesButtons from "../PagesButtons";
import ContentGroup from "../ContentGroup";

const PaginatedContentGroup2 = ({ content, itemsPerPage, subject }) => {
  const totalNumberItems = content.length;

  //lowest value for number of pages is 1. so, on the first page there could be nothing there
  const totalNumberPages = Math.max(
    Math.ceil(totalNumberItems / itemsPerPage),
    1
  );

  const [contentToDisplay, setContentToDisplay] = useState(content);

  const [currentPage, setCurrentPage] = useState(1);

  const onNextPageClick = () => {
    const nextPage = Math.min(currentPage + 1, totalNumberPages);

    setCurrentPage(nextPage);
  };

  const onPreviousPageClick = () => {
    let nextPage;

    if (totalNumberPages === 0) {
      nextPage = Math.max(currentPage - 1, 0);
    } else {
      nextPage = Math.max(currentPage - 1, 1);
    }

    setCurrentPage(nextPage);
  };

  const onDirectPageNumberChange = (pageNumber) => {
    pageNumber = +pageNumber;

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalNumberPages) {
      return;
    }

    setCurrentPage(pageNumber);
  };

  //when the content change from empty to something we want to get the content to display. And same when currentPage changes
  useEffect(() => {
    const lastSpliceIndex = itemsPerPage * currentPage;

    const firstSpliceIndex = lastSpliceIndex - itemsPerPage;

    setContentToDisplay(content.slice(firstSpliceIndex, lastSpliceIndex));
  }, [content, currentPage]);

  return (
    <>
      <div className="ContentGroupContainer">
        {contentToDisplay.length ? (
          <ContentGroup title={subject} content={contentToDisplay} />
        ) : (
          <p className="ContentGroup__blank heading-large color-light">
            No results found
          </p>
        )}
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

export default PaginatedContentGroup2;
