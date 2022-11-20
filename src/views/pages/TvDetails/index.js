import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import MediaDetails from "../../../components/MediaDetails";
import ContentPageLayout from "../../../components/ContentPageLayout";
import useMediaDetails from "../../../hooks/useMediaDetails";
import "../sharedStyles/movie-tv-details.scss";

const TvDetails = () => {
  const navigate = useNavigate();

  const tvId = useParams().id;

  const tvDetails = useMediaDetails("tv", tvId);

  return (
    <div className="TvDetails">
      <ContentPageLayout
        searchBarPlaceholder="Search for TV shows"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/tv/search/?name=${searchValue}&page=1`);
        }}
      >
        <MediaDetails
          mediaData={tvDetails.media}
          castData={tvDetails.cast}
          mediaType="tv"
        />
      </ContentPageLayout>
    </div>
  );
};

export default TvDetails;