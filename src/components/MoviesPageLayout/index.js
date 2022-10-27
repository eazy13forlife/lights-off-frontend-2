import React from "react";

import { useNavigate } from "react-router-dom";
import ContentPageLayout from "../ContentPageLayout";
import Genres from "../Genres";
import ScrollDropdown from "../ScrollDropdown";
import { movieGenres } from "../Genres/helpers";
import "../sharedStyles/moviesTvPageLayout.scss";

const MoviesPageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="MoviesPageLayout">
      <ContentPageLayout
        searchBarPlaceholder="Search for movies"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/movies/search/?name=${searchValue}&page=1`);
        }}
      >
        <div className="Scroll__container">
          <ScrollDropdown buttonTitle="Genres">
            <Genres genres={movieGenres} mediaType="movie" />
          </ScrollDropdown>
        </div>

        {children}
      </ContentPageLayout>
    </div>
  );
};

export default MoviesPageLayout;
