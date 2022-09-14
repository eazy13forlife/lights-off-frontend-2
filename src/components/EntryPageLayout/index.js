import React from "react";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import "./index.scss";

const EntryPageLayout = ({ children }) => {
  return (
    <div className="Entry">
      <BsFillLightbulbOffFill className="Entry__logo logo" />
      {children}
    </div>
  );
};

export default EntryPageLayout;
