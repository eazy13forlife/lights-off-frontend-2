import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import TrendingContent from "./TrendingContent";
import "./index.scss";

const Home = () => {
  return (
    <div className="Home">
      <ContentPageLayout searchBarPlaceholder="Search for movies and tv...">
        <h1 className="heading-large color-light capitalize">
          Currently Trending
        </h1>
        <div className="Home__content">{TrendingContent()}</div>
      </ContentPageLayout>
    </div>
  );
};

export default Home;
