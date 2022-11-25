import React from "react";

import ContentGroup from "../../../components/ContentGroup";
import useTrendingContent from "./useTrendingContent";

const MainBody = () => {
  const [renderedMovies, renderedTv, renderedPeople] = useTrendingContent();

  return (
    <div className="ContentGroupContainer">
      <ContentGroup
        title="Trending Movies"
        content={renderedMovies}
        linkTo="/movies/trending/?page=1"
      />
      <ContentGroup
        title="Trending TV"
        content={renderedTv}
        linkTo="/tv/trending/?page=1"
      />
      <ContentGroup
        title="Trending People"
        content={renderedPeople}
        linkTo="/people/trending/?page=1"
      />
    </div>
  );
};

export default MainBody;
