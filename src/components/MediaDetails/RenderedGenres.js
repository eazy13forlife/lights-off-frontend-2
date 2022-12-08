import React from "react";
import { Link } from "react-router-dom";

const RenderedGenres = ({ genres }) => {
  let renderedGenres;

  if (genres) {
    renderedGenres = genres.map((genre, index) => {
      return (
        <Link
          to={`/movies/genre/?id=${genre.id}&name=${genre.name}&page=1`}
          className="Details__link Details__link--light"
          key={index}
        >
          <span className="Details__link-text">{genre.name}</span>
        </Link>
      );
    });
  }

  const getGenres = () => {
    if (renderedGenres.length) {
      return renderedGenres;
    }

    return <p className="Details__body-text">N/A</p>;
  };

  return getGenres();
};

export default RenderedGenres;
