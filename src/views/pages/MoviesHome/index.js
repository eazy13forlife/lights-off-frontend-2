import React from "react";

import MoviesPageLayout from "../../../components/MoviesPageLayout";
import MainBody from "./MainBody";

const Movies = () => {
  return (
    <div className="MoviesHome">
      <MoviesPageLayout>
        <MainBody />
      </MoviesPageLayout>
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
