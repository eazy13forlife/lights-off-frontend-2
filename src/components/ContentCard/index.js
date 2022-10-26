import React from "react";
import { Link } from "react-router-dom";

import DescriptionContent from "./DescriptionContent";
import { getOnClickLink, getImageSrc } from "./helperFunctions";
import "./index.scss";

const ContentCard = ({ data }) => {
  return (
    <Link to={`${getOnClickLink(data.media_type, data.id)}`}>
      <div className="ContentCard">
        <figure className="ContentCard__image-container">
          <img src={getImageSrc(data)} className="ContentCard__image" />
        </figure>

        <div className="ContentCard__contents color-light">
          {<DescriptionContent data={data} />}
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
