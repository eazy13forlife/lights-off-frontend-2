import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import MediaDetails from "../../../components/MediaDetails";
import useTvDetails from "./useTvDetails";
import ContentPageLayout from "../../../components/ContentPageLayout";
import "./index.scss";

const TvDetails = () => {
  const navigate = useNavigate();

  const tvId = useParams().id;

  const tvDetails = useTvDetails(tvId);

  return (
    <div className="TvDetails">
      <ContentPageLayout
        searchBarPlaceholder="Search for Tv shows"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/tv/search/?name=${searchValue}&page=1`);
        }}
      >
        <MediaDetails
          mediaData={tvDetails.tv}
          castData={tvDetails.cast}
          mediaType="tv"
        />
      </ContentPageLayout>
    </div>
  );
};

export default TvDetails;
