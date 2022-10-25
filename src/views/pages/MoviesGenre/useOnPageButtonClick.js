import React from "react";
import { useNavigate } from "react-router-dom";
import { movieGenres } from "../../../components/Genres/helpers";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  const onPageButtonClick = (searchValue, pageNumber) => {
    navigate(
      `/movies/genre/?id=${searchValue}&name=${movieGenres[searchValue].genre}&page=${pageNumber}`
    );
  };

  return onPageButtonClick;
};

export default useOnPageButtonClick;
