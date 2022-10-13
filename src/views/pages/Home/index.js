import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import TrendingGroup from "./TrendingGroup";
import useTrendingContent from "./useTrendingContent";
import "./index.scss";

const Home = () => {
  const [renderedMovies, renderedTv, renderedPeople] = useTrendingContent();

  return (
    <div className="Home">
      <ContentPageLayout searchBarPlaceholder="Search for movies and tv...">
        <TrendingGroup title="Trending Movies" content={renderedMovies} />
        <TrendingGroup title="Trending TV" content={renderedTv} />
        <TrendingGroup title="Trending People" content={renderedPeople} />
      </ContentPageLayout>
    </div>
  );
};

export default Home;
