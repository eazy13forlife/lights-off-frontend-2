import React from "react";

import PaginatedContentGroup from "../../../components/PaginatedContentGroup";

const MainBody = ({ searchResults }) => {
  console.log(searchResults);
  //if something entered in search results, return the results
  if (searchResults !== null) {
    return <PaginatedContentGroup {...searchResults} />;
  }
};

export default MainBody;
