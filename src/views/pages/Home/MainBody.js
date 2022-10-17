import React from "react";

import ContentGroup from "./ContentGroup";
import useTrendingContent from "./useTrendingContent";
import RenderedContentCard from "./RenderedContentCard";

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
    const { data, totalResults, searchValue } = searchResults;

    const renderedSearchResults = data.map((media) => {
      return <RenderedContentCard data={media} key={media.id} />;
    });

    return (
      <ContentGroup
        title={`Found ${totalResults} results for ${searchValue} `}
        content={renderedSearchResults}
      />
    );
  }
};

export default MainBody;
