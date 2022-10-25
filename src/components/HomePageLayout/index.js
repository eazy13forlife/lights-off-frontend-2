import React from "react";
import { useNavigate } from "react-router-dom";

import ContentPageLayout from "../ContentPageLayout";

const HomePageLayout = ({ children }) => {
  const navigate = useNavigate();

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
