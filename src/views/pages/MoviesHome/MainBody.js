import React from "react";

import usePopularContent from "./usePopularContent";
import ContentGroup from "../../../components/ContentGroup";

const MainBody = () => {
  const [
    renderedTopRated,
    renderedNowPlaying,
    renderedPopular,
    renderedUpcoming,
    renderedTrending,
  ] = usePopularContent();

  return (
    <div className="ContentGroupContainer">
      <ContentGroup
        title="Top Rated Movies"
        content={renderedTopRated}
        linkTo="/movies/top_rated/?page=1"
      />
      <ContentGroup
        title="Now Playing Movies"
        content={renderedNowPlaying}
        linkTo="/movies/now_playing/?page=1"
      />
      <ContentGroup
        title="Popular Movies"
        content={renderedPopular}
        linkTo="/movies/popular/?page=1"
      />
      <ContentGroup
        title="Upcoming Movies"
        content={renderedUpcoming}
        linkTo="/movies/upcoming/?page=1"
      />
      <ContentGroup
        title="Trending Movies"
        content={renderedTrending}
        linkTo="/movies/trending/?page=1"
      />
    </div>
  );
};

export default MainBody;
