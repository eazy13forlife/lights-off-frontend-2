import React from "react";
import { useNavigate } from "react-router-dom";

import ContentPageLayout from "../ContentPageLayout";

const WatchNextPageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ContentPageLayout
      searchBarPlaceholder="Search in watch next..."
      onSearchSubmit={(e, searchValue) => {
        e.preventDefault();
        navigate(`/watch-next/search/?name=${searchValue}&page=1`);
      }}
    >
      {children}
    </ContentPageLayout>
  );
};

export default WatchNextPageLayout;
