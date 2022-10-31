import React from "react";
import usePopularContent from "./usePopularContent";
import ContentGroup from "../../../components/ContentGroup";

const MainBody = () => {
  const [renderedPopular, renderedTopRated, renderedTrending, renderedOnAir] =
    usePopularContent();

  return (
    <div className="ContentGroupContainer">
      <ContentGroup
        title="Popular TV"
        content={renderedPopular}
        linkTo="/tv/popular/?page=1"
      />
      <ContentGroup
        title="Top Rated TV"
        content={renderedTopRated}
        linkTo="/tv/top_rated/?page=1"
      />
      <ContentGroup
        title="Trending TV"
        content={renderedTrending}
        linkTo="/tv/trending/?page=1"
      />
      <ContentGroup
        title="On Air"
        content={renderedOnAir}
        linkTo="/tv/on_air/?page=1"
      />
    </div>
  );
};

export default MainBody;
