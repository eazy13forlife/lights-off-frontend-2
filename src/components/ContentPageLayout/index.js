import React from "react";

import Sidebar from "../Sidebar";
import Searchbar from "../SearchBar";
import Header from "../Header";
import "./index.scss";

const ContentPageLayout = ({
  searchBarPlaceholder,
  onSearchSubmit,
  children,
}) => {
  return (
    <div className="ContentPageLayout">
      <Header />
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
