import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import Genres from "../../../components/Genres";
import ScrollDropdown from "../../../components/ScrollDropdown";

import "./index.scss";

const Movies = () => {
  return (
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
  );
};

export default Movies;
