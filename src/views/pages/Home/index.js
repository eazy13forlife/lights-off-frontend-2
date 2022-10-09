import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import useTrendingMedia from "./useTrendingMedia";

const Home = () => {
  const media = useTrendingMedia();

  return (
    <div className="Home">
      <ContentPageLayout searchBarPlaceholder="Search for movies and tv...">
        <img src="http://image.tmdb.org/t/p/w500/4tHOplJqH1eg37cFBOWXkBTDTcB.jpg" />
      </ContentPageLayout>
    </div>
  );
};

export default Home;
