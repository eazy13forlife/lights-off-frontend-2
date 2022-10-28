import React from "react";
import usePopularContent from "./usePopularContent";
import ContentGroup from "../../../components/ContentGroup";

const MainBody = () => {
  const [renderedPopular, renderedTopRated, renderedTrending, renderedOnAir] =
    usePopularContent();

  return (
    <div className="ContentGroupContainer">
      <ContentGroup title="Popular TV" content={renderedPopular} />
      <ContentGroup title="Top Rated TV" content={renderedTopRated} />
      <ContentGroup title="Trending TV" content={renderedTrending} />
      <ContentGroup title="On Air" content={renderedOnAir} />
    </div>
  );
};

export default MainBody;
