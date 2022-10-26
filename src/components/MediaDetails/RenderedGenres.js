import React from "react";
import { Link } from "react-router-dom";

const RenderedGenres = ({ genres }) => {
  let renderedGenres;

  if (genres) {
    renderedGenres = genres.map((genre, index) => {
      return (
        <Link
          to={`/movies/genre/?id=${genre.id}&name=${genre.name}&page=1`}
          className="MediaDetails__link MediaDetails__link--light"
          key={index}
        >
          <span className="MediaDetails__link-text">{genre.name}</span>
        </Link>
      );
    });
  }

  return <>{renderedGenres}</>;
};

export default RenderedGenres;
