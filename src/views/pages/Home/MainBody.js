import React from "react";

import ContentGroup from "../../../components/ContentGroup";
import useTrendingContent from "./useTrendingContent";

const MainBody = () => {
  const [renderedMovies, renderedTv, renderedPeople] = useTrendingContent();

  return (
    <div className="ContentGroupContainer">
      <ContentGroup title="Trending Movies" content={renderedMovies} />
      <ContentGroup title="Trending TV" content={renderedTv} />
      <ContentGroup title="Trending People" content={renderedPeople} />
    </div>
  );
};

export default MainBody;
