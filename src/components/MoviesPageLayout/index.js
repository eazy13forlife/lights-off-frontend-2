import React from "react";

import { useNavigate } from "react-router-dom";
import ContentPageLayout from "../ContentPageLayout";
import Genres from "../Genres";
import ScrollDropdown from "../ScrollDropdown";
import "./index.scss";

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
          <ScrollDropdown buttonTitle="Select a genre">
            <Genres
              genres={[
                "Action",
                "Adventure",
                "Animation",
                "Comedy",
                "Crime",
                "Documentary",
                "Drama",
                "Family",
                "Fantasy",
                "History",
                "Horror",
                "Mystery",
                "Music",
                "Romance",
                "Science Fiction",
                "TV Movie",
                "Thriller",
                "War",
                "Western",
              ]}
            />
          </ScrollDropdown>
        </div>

        {children}
      </ContentPageLayout>
    </div>
  );
};

export default MoviesPageLayout;
