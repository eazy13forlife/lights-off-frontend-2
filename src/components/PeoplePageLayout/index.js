import React from "react";

import ContentPageLayout from "../ContentPageLayout";

const PeoplePageLayout = ({ children }) => {
  return (
    <div class="PeoplePageLayout">
      <ContentPageLayout
        searchBarPlaceholder="Search for people"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/people/search/?name=${searchValue}&page=1`);
        }}
      />
      {children}
    </div>
  );
};

export default PeoplePageLayout;
