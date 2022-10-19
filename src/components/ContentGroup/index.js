import React from "react";
import "./index.scss";

const ContentGroup = ({ title, content }) => {
  return (
    <div className="ContentGroup">
      <h1 className=" heading-large oval-border color-light capitalize">
        {title}
      </h1>
      <div className="ContentGroup__all-media">{content}</div>
    </div>
  );
};

export default ContentGroup;
