import React from "react";
import { FiFilm } from "react-icons/fi";
import { FaTv } from "react-icons/fa";
import { getReleaseDate } from "./helperFunctions";

const DescriptionContent = ({ data }) => {
  if (data.media_type === "person") {
    return (
      <>
        <p className="capitalize body-medium">{data.known_for_department}</p>
        <p className="ContentCard__name capitalize heading-extra-small">
          {data.name}
        </p>
      </>
    );
  }

  if (data.media_type === "movie" || data.media_type === "tv") {
    return (
      <>
        <p className="capitalize body-medium">{getReleaseDate(data)}</p>

        <div className="ContentCard__media-type">
          {data.media_type === "movie" ? (
            <FiFilm className="ContentCard__icon" />
          ) : (
            <FaTv className="ContentCard__icon" />
          )}
          <p className="capitalize body-medium">
            {data.media_type === "movie" ? data.media_type : "TV"}
          </p>
        </div>

        <p className="ContentCard__name capitalize heading-extra-small">
          {data.media_type === "movie" ? data.title : data.name}
        </p>
      </>
    );
  }
};

export default DescriptionContent;
