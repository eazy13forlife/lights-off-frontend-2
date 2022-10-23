import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import Genres from "../../../components/Genres";
import ScrollDropdown from "../../../components/ScrollDropdown";
import MainBody from "./MainBody";
import "./index.scss";

const Movies = () => {
  return (
    <div className="Movies">
      <ContentPageLayout
        searchBarPlaceholder="Search for movies"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
        }}
      >
        <MainBody />
      </ContentPageLayout>
    </div>
  );
};

export default Movies;

/*
  <div className="Movies">
      <ContentPageLayout>
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
      </ContentPageLayout>
    </div>
    */
