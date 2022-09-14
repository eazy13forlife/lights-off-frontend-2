import React from "react";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import "./index.scss";

const EntryPageLayout = ({ children }) => {
  return (
    <div className="Entry">
      <BsFillLightbulbOffFill className="logo" />
      {children}
    </div>
  );
};

export default EntryPageLayout;
