import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const ContentGroup = ({ title, content, linkTo }) => {
  return (
    <div className="ContentGroup">
      <header className="ContentGroup__header">
        <h1 className=" heading-medium oval-border color-light capitalize">
          {title}
        </h1>
        {linkTo ? (
          <Link to={linkTo} className="ContentGroup__link">
            See more
          </Link>
        ) : null}
      </header>

      <div className="ContentGroup__all-media">{content}</div>
    </div>
  );
};

export default ContentGroup;
