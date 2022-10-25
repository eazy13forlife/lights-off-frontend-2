import React from "react";
import PaginatedContentGroup from "../../../components/PaginatedContentGroup";
import useOnPageButtonClick from "./useOnPageButtonClick";
import { movieGenres } from "../../../components/Genres/helpers";

const MainBody = ({ searchData }) => {
  const onPageButtonClick = useOnPageButtonClick();

  return (
    <PaginatedContentGroup
      {...searchData}
      subject={movieGenres[searchData.searchValue].genre}
      mediaType="movie"
      onPageButtonClick={onPageButtonClick}
    />
  );
};

export default MainBody;
