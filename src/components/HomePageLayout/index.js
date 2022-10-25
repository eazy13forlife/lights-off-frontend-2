import React from "react";

import ContentPageLayout from "../ContentPageLayout";

const HomePageLayout = ({ children }) => {
  return (
    <ContentPageLayout
      searchBarPlaceholder="Search for movies, tv and people..."
      onSearchSubmit={(e, searchValue) => {
        e.preventDefault();
        navigate(`/search/?name=${searchValue}&page=1`);
      }}
    >
      {children}
    </ContentPageLayout>
  );
};

export default HomePageLayout;
