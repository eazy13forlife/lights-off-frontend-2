import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import useTrendingContent from "./useTrendingContent";
import "./index.scss";

const Home = () => {
  const [renderedMovies, renderedTv, renderedPeople] = useTrendingContent();

  return (
    <div className="Home">
      <ContentPageLayout searchBarPlaceholder="Search for movies and tv...">
        <h1 className="heading-large color-light capitalize">
          Currently Trending
        </h1>
        <div className="Home__content">{renderedMovies}</div>
      </ContentPageLayout>
    </div>
  );
};

export default Home;
