import React from "react";

import ContentPageLayout from "../../../components/ContentPageLayout";
import Genres from "../../../components/Genres";

const Movies = () => {
  return (
    <div className="Movies">
      <ContentPageLayout>
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
      </ContentPageLayout>
    </div>
  );
};

export default Movies;
