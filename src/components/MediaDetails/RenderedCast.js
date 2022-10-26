import React from "react";
import { Link } from "react-router-dom";

const RenderedCast = ({ cast }) => {
  const renderedCast = cast.map((castObject, index) => {
    return (
      <Link
        to=""
        className="MediaDetails__link MediaDetails__link--dark"
        key={index}
      >
        <span className="MediaDetails__link-text">{castObject.name}</span>
      </Link>
    );
  });

  return <>{renderedCast}</>;
};

export default RenderedCast;
