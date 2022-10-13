import React from "react";

const TrendingGroup = ({ title, content }) => {
  return (
    <div className="Home__trending-group">
      <h1 className=" heading-large oval-border color-light capitalize">
        {title}
      </h1>
      <div className="Home__trending-content">{content}</div>
    </div>
  );
};

export default TrendingGroup;
