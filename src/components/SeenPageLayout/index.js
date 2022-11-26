import React from "react";
import { useNavigate } from "react-router-dom";

import ContentPageLayout from "../ContentPageLayout";

const SeenPageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ContentPageLayout
      searchBarPlaceholder="Search in seen.."
      onSearchSubmit={(e, searchValue) => {
        e.preventDefault();
        navigate(`/seen/search/?name=${searchValue}&page=1`);
      }}
    >
      {children}
    </ContentPageLayout>
  );
};

export default SeenPageLayout;
