import React from "react";
import { useNavigate } from "react-router-dom";

import ContentPageLayout from "../ContentPageLayout";

const PeoplePageLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="PeoplePageLayout">
      <ContentPageLayout
        searchBarPlaceholder="Search for people"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/people/search/?name=${searchValue}&page=1`);
        }}
      >
        {children}
      </ContentPageLayout>
    </div>
  );
};

export default PeoplePageLayout;
