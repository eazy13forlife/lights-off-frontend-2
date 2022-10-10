import React from "react";
import moment from "moment";

import "../index.scss";

const PersonCard = ({ image, name, mediaType, knownFor }) => {
  return (
    <div className="MediaCard">
      <img src={image} />
      <div className="MediaCard__contents">
        <p>{knownFor}</p>
        <p>{mediaType}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PersonCard;
