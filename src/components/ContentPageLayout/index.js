import React from "react";

import Sidebar from "../Sidebar";
import Searchbar from "../SearchBar";
import "./index.scss";

const ContentPageLayout = ({ searchBarPlaceholder, children }) => {
  return (
    <div className="ContentPageLayout">
      <Sidebar />
      <div className="ContentPageLayout__main">
        <Searchbar placeholder={searchBarPlaceholder} />
        {children}
      </div>
    </div>
  );
};

export default ContentPageLayout;
