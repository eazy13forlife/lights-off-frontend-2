import React from "react";
import { Link } from "react-router-dom";

const RenderedCast = ({ cast }) => {
  const renderedCast = cast.map((castObject, index) => {
    return (
      <Link
        to={`/person/${castObject.id}`}
        className="Details__link Details__link--dark"
        key={index}
      >
        <span className="Details__link-text">{castObject.name}</span>
      </Link>
    );
  });

  return <>{renderedCast}</>;
};

export default RenderedCast;
