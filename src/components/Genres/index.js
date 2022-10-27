import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Genres = ({ genres, mediaType }) => {
  //the correct link is /movies/genre but mediaType is just movie,so make plural
  let subject = mediaType === "movie" ? "movies" : "tv";

  const renderedGenres = Object.values(genres).map((genreObject, index) => {
    const { genre, id } = genreObject;
    return (
      <Link
        to={`/${subject}/genre/?id=${id}&name=${genres[id].genre}&page=1`}
        key={index}
        className="Genres__genre color-light"
      >
        <span className="heading-medium">{genre}</span>
      </Link>
    );
  });

  return <div className="Genres">{renderedGenres}</div>;
};

export default Genres;
