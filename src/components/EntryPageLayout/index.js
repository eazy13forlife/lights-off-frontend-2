import React from "react";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import "./index.scss";

const EntryPageLayout = ({ errors, children, isAttempting }) => {
  return (
    <div className="Entry">
      <BsFillLightbulbOffFill className="Entry__logo logo" />
      {isAttempting.boolean ? (
        <p className="Entry__error-text color-light body-medium">
          {isAttempting.message}
        </p>
      ) : null}
      {errors ? (
        <p className="Entry__error-text color-error body-medium">{errors}</p>
      ) : null}
      {children}
    </div>
  );
};

export default EntryPageLayout;
