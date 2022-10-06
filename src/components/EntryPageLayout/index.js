import React from "react";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import "./index.scss";

const EntryPageLayout = ({ errors, children }) => {
  return (
    <div className="Entry">
      <BsFillLightbulbOffFill className="Entry__logo logo" />
      {errors ? (
        <p className="Entry__error-text color-error body-medium">{errors}</p>
      ) : null}
      {children}
    </div>
  );
};

export default EntryPageLayout;
