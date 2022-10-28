import React, { useState, useEffect } from "react";

import ContentCard from "../ContentCard";
import PagesButtons from "../PagesButtons";
import ContentGroup from "../ContentGroup";

const PaginatedContentGroup2 = ({
  content,
  itemsPerPage,
  mediaType,
  subject,
}) => {
  const totalNumberItems = content.length;

  const totalNumberPages = Math.ceil(totalNumberItems / itemsPerPage);

  const [contentToDisplay, setContentToDisplay] = useState(content);

  const [currentPage, setCurrentPage] = useState(1);

  const onNextPageClick = () => {
    const nextPage = Math.min(currentPage + 1, totalNumberPages);

    setCurrentPage(nextPage);
  };

  const onPreviousPageClick = () => {
    const nextPage = Math.max(currentPage - 1, 1);

    setCurrentPage(nextPage);
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
        <ContentGroup title={subject} content={contentToDisplay} />
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

export default PaginatedContentGroup2;
