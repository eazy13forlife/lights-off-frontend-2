import React from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

import useOnRemoveClick from "./useOnRemoveClick";
import DescriptionContent from "./DescriptionContent";
import { getOnClickLink, getImageSrc } from "./helperFunctions";

import "./index.scss";

const ContentCard = ({ data, removable }) => {
  const onRemoveClick = useOnRemoveClick();

  return (
    <div className="ContentCard">
      <Link to={`${getOnClickLink(data.media_type, data.id)}`}>
        <figure className="ContentCard__image-container">
          <img src={getImageSrc(data)} className="ContentCard__image" />
        </figure>

        <div className="ContentCard__contents color-light">
          {<DescriptionContent data={data} />}
        </div>
      </Link>
      {removable ? (
        <button
          className="ContentCard__button"
          onClick={async () => {
            await onRemoveClick(removable.base, data.id);
            removable.updateData();
          }}
        >
          <BsTrash />
        </button>
      ) : null}
    </div>
  );
};

export default ContentCard;
