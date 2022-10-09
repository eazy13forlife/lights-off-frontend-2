import React from "react";

import Sidebar from "../Sidebar";
import Searchbar from "../SearchBar";
import "./index.scss";

const ContentPageLayout = () => {
  return (
    <div className="ContentPageLayout">
      <Sidebar />
      <div className="ContentPageLayout__main">
        <Searchbar />
      </div>
    </div>
  );
};

export default ContentPageLayout;
