import React from "react";
import { Link } from "react-router-dom";

const RenderedCredits = ({ data }) => {
  const renderedCredits = data.map((dataObject, index) => {
    return (
      <Link
        to={`/person/${dataObject.id}`}
        className="Details__link Details__link--dark"
        key={index}
      >
        <span className="Details__link-text">{dataObject.name}</span>
      </Link>
    );
  });

  return (
    <>
      {renderedCredits.length ? (
        renderedCredits
      ) : (
        <p className="Details__body-text">N/A</p>
      )}
    </>
  );
};

export default RenderedCredits;
