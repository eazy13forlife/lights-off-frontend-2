import React from "react";
import { useNavigate } from "react-router-dom";

import ContentPageLayout from "../ContentPageLayout";

const FavoritesPageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ContentPageLayout
      searchBarPlaceholder="Search in favorites..."
      onSearchSubmit={(e, searchValue) => {
        e.preventDefault();
        navigate(`/favorites/search/?name=${searchValue}&page=1`);
      }}
    >
      {children}
    </ContentPageLayout>
  );
};

export default FavoritesPageLayout;
