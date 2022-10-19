import React from "react";

import ContentGroup from "../../../components/ContentGroup";
import useTrendingContent from "./useTrendingContent";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";

const MainBody = ({ searchResults }) => {
  const [renderedMovies, renderedTv, renderedPeople] = useTrendingContent();

  //if nothing entered in search results return default content
  if (searchResults === null) {
    return (
      <>
        <ContentGroup title="Trending Movies" content={renderedMovies} />
        <ContentGroup title="Trending TV" content={renderedTv} />
        <ContentGroup title="Trending People" content={renderedPeople} />
      </>
    );
  }

  //if something entered in search results, return the results
  if (searchResults !== null) {
    const { results, totalNumberResults, totalNumberPages, searchValue } =
      searchResults;

    return (
      <PaginatedContentGroup
        initialResults={results}
        searchValue={searchValue}
        totalNumberResults={totalNumberResults}
        totalNumberPages={totalNumberPages}
      />
    );
  }
};

export default MainBody;
