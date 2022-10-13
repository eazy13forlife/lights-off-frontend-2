import React from "react";
import moment from "moment";

import { FiFilm } from "react-icons/fi";
import { FaTv } from "react-icons/fa";
import "./index.scss";

const ContentCard = ({ image, name, releaseDate, mediaType, knownFor }) => {
  const renderContent = () => {
    if (mediaType === "person") {
      return (
        <>
          <p className="capitalize body-medium">{knownFor}</p>
          <p className="ContentCard__name capitalize heading-extra-small">
            {name}
          </p>
        </>
      );
    }

    if (mediaType === "movie" || mediaType === "tv") {
      return (
        <>
          <p className="capitalize body-medium">{moment(releaseDate).year()}</p>
          <div className="ContentCard__media-type">
            {mediaType === "movie" ? (
              <FiFilm className="ContentCard__icon" />
            ) : (
              <FaTv className="ContentCard__icon" />
            )}
            <p className="capitalize body-medium">
              {mediaType === "tv" ? "TV" : mediaType}
            </p>
          </div>

          <p className="ContentCard__name capitalize heading-extra-small">
            {name}
          </p>
        </>
      );
    }
  };

  return (
    <div className="ContentCard">
      <figure className="ContentCard__image">
        <img src={image} />
      </figure>

      <div className="ContentCard__contents color-light">{renderContent()}</div>
    </div>
  );
};

export default ContentCard;
