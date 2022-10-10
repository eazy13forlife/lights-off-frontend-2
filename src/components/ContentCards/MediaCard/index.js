import React from "react";
import moment from "moment";

import "../index.scss";

const MediaCard = ({ image, title, releaseDate, mediaType }) => {
  return (
    <div className="MediaCard">
      <img src={image} />
      <div className="MediaCard__contents">
        <p>{moment().year(releaseDate).toString()}</p>
        <p>{mediaType}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MediaCard;
