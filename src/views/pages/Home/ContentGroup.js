import React from "react";

const ContentGroup = ({ title, content }) => {
  return (
    <div className="Home__content-group">
      <h1 className=" heading-large oval-border color-light capitalize">
        {title}
      </h1>
      <div className="Home__content-all-media">{content}</div>
    </div>
  );
};

export default ContentGroup;
