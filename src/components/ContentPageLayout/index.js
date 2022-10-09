import React from "react";

import Sidebar from "../Sidebar";
import Searchbar from "../SearchBar";
import "./index.scss";

const ContentPageLayout = ({ children }) => {
  return (
    <div className="ContentPageLayout">
      <Sidebar />
      <div className="ContentPageLayout__main">
        <Searchbar />
        {children}
      </div>
    </div>
  );
};

export default ContentPageLayout;
