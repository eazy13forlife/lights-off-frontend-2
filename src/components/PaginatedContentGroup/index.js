import React, { useState, useEffect } from "react";
import axios from "axios";

import apiKeys from "../../api";
import ContentGroup from "../ContentGroup";
import RenderedContentCard from "../../views/pages/Home/RenderedContentCard";
import PagesButtons from "../PagesButtons";

const Pagination = ({
  initialResults,
  searchValue,
  totalNumberResults,
  totalNumberPages,
}) => {
  const [results, setResults] = useState(initialResults);

  const [currentPage, setCurrentPage] = useState(1);

  const onPreviousPageClick = () => {
    //ensures new page does not go below 1
    const newPage = Math.max(1, currentPage - 1);

    setCurrentPage(newPage);
  };

  const onNextPageClick = () => {
    //ensures new page does not go past total pages
    const newPage = Math.min(totalNumberPages, currentPage + 1);

    setCurrentPage(newPage);
  };

  const onPageButtonClick = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKeys.theMovieDb}&language=en-US&page=${currentPage}&include_adult=false&query=${searchValue}`
    );

    setResults(response.data.results);
  };

  useEffect(() => {
    onPageButtonClick();
  }, [currentPage]);

  const renderedResults = results.map((media) => {
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

export default Pagination;
