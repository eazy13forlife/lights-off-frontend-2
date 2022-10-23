import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import Genres from "../../../components/Genres";
import GenresDropdown from "../../../components/GenresDropdown";

//import "./index.scss";

const Movies = () => {
  return (
    <div className="Movies">
      <ContentPageLayout>
        <GenresDropdown buttonTitle="Select a genre">
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
        </GenresDropdown>
      </ContentPageLayout>
    </div>
  );
};

export default Movies;
