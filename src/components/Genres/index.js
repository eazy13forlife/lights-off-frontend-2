import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Genres = ({ genres }) => {
  const renderedGenres = Object.values(genres).map((genreObject, index) => {
    const { genre, id } = genreObject;
    return (
      <Link
        to={`/movies/genre/?id=${id}&name=${genres[id].genre}&page=1`}
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
