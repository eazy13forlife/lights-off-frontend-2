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
      <ContentGroup title="Top Rated" content={renderedTopRated} />
      <ContentGroup title="Now Playing" content={renderedNowPlaying} />
      <ContentGroup title="Popular" content={renderedPopular} />
      <ContentGroup title="Upcoming" content={renderedUpcoming} />
      <ContentGroup title="Trending" content={renderedTrending} />
    </div>
  );
};

export default MainBody;
