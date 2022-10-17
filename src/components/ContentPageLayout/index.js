import React from "react";

import Sidebar from "../Sidebar";
import Searchbar from "../SearchBar";
import "./index.scss";

const ContentPageLayout = ({
  searchBarPlaceholder,
  onSearchSubmit,
  children,
}) => {
  return (
    <div className="ContentPageLayout">
      <Sidebar />
      <div className="ContentPageLayout__main">
        <Searchbar
          placeholder={searchBarPlaceholder}
          onSubmit={onSearchSubmit}
        />
        {children}
      </div>
    </div>
  );
};

export default ContentPageLayout;
