import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { FiFilm } from "react-icons/fi";
import { FaTv } from "react-icons/fa";
import blankPerson from "../../images/blank-person.jpeg";
import blankMedia from "../../images/cinema-clapboard.png";
import { getOnClickLink, getImageSrc } from "./helperFunctions";
import "./index.scss";

const ContentCard = ({ data }) => {
  const {
    id,
    title,
    release_date: releaseDate,
    media_type: mediaType,
    poster_path: mediaImage,
    name,
    first_air_date,
    known_for_department: knownFor,
    profile_path: personImage,
  } = data;

  const renderDescriptionContent = () => {
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
          <p className="capitalize body-medium">
            {mediaType === "movie"
              ? moment(releaseDate).year()
              : moment(first_air_date).year()}
          </p>
          <div className="ContentCard__media-type">
            {mediaType === "movie" ? (
              <FiFilm className="ContentCard__icon" />
            ) : (
              <FaTv className="ContentCard__icon" />
            )}
            <p className="capitalize body-medium">
              {mediaType === "movie" ? mediaType : "TV"}
            </p>
          </div>

          <p className="ContentCard__name capitalize heading-extra-small">
            {mediaType === "movie" ? title : name}
          </p>
        </>
      );
    }
  };

  return (
    <Link to={`${getOnClickLink(mediaType, id)}`}>
      <div className="ContentCard">
        <figure className="ContentCard__image-container">
          <img src={getImageSrc(data)} className="ContentCard__image" />
        </figure>

        <div className="ContentCard__contents color-light">
          {renderDescriptionContent()}
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
