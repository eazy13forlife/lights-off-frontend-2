import React from "react";

import ContentGroup from "./ContentGroup";
import useTrendingContent from "./useTrendingContent";
import RenderedContentCard from "./RenderedContentCard";
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

    // const renderedSearchResults = results.map((media) => {
    //   return <RenderedContentCard data={media} key={media.id} />;
    // });

    // return (
    //   <ContentGroup
    //     title={`Found ${totalNumberResults} results for ${searchValue} `}
    //     content={renderedSearchResults}
    //   />
    // );
  }
};

export default MainBody;
