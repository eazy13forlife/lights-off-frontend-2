import React from "react";
import moment from "moment";

import "./index.scss";

const ContentCard = ({ image, name, releaseDate, mediaType, knownFor }) => {
  const renderContent = () => {
    if (mediaType === "person") {
      <>
        return <p className="capitalize">{knownFor}</p>
        <p className="MediaCard__name capitalize">{name}</p>
      </>;
    }

    return (
      <>
        <p className="capitalize">{moment(releaseDate).year()}</p>
        <p className="capitalize">{mediaType}</p>
        <p className="MediaCard__name capitalize">{name}</p>
      </>
    );
  };

  return (
    <div className="MediaCard">
      <figure className="MediaCard__image">
        <img src={image} />
      </figure>

      <div className="MediaCard__contents color-light">{renderContent()}</div>
    </div>
  );
};

export default ContentCard;
