import React from "react";

import PaginatedContentGroup from "../../../components/PaginatedContentGroup";

const MainBody = ({ searchResults }) => {
  //if something entered in search results, return the results
  if (searchResults !== null) {
    const {
      results = [],
      totalNumberResults = 0,
      totalNumberPages = 0,
      searchValue,
      currentPage,
    } = searchResults;

    return (
      <PaginatedContentGroup
        initialResults={results}
        searchValue={searchValue}
        totalNumberResults={totalNumberResults}
        totalNumberPages={totalNumberPages}
        currentPage={currentPage}
      />
    );
  }
};

export default MainBody;
