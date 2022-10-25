import React from "react";

import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";

const MainBody = ({ searchData }) => {
  const onPageButtonClick = useOnPageButtonClick();

  return (
    <PaginatedContentGroup
      {...searchData}
      mediaType="movie"
      onPageButtonClick={onPageButtonClick}
    />
  );
};

export default MainBody;
