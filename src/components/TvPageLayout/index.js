import React from "react";
import { useNavigate } from "react-router-dom";

import ContentPageLayout from "../ContentPageLayout";
import Genres from "../Genres";
import ScrollDropdown from "../ScrollDropdown";
import { tvGenres } from "../Genres/helpers";
import "../sharedStyles/moviesTvPageLayout.scss";

const TvPageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="TvPageLayout">
      <ContentPageLayout
        searchBarPlaceholder="Search for TV shows"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/tv/search?name=${searchValue}&page=1`);
        }}
      >
        <div className="Scroll__container">
          <ScrollDropdown buttonTitle="Genres">
            <Genres genres={tvGenres} mediaType="tv" />
          </ScrollDropdown>
        </div>

        {children}
      </ContentPageLayout>
    </div>
  );
};

export default TvPageLayout;
