import React from "react";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";

const MainBody = ({ searchData }) => {
  return <PaginatedContentGroup {...searchData} mediaType="movie" />;
};

export default MainBody;
