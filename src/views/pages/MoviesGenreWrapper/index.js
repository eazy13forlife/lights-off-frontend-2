import React from "react";
import { useSearchParams } from "react-router-dom";
import MoviesGenre from "../MoviesGenre";

const MoviesGenreWrapper = () => {
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get("id");

  return <MoviesGenre key={searchValue} />;
};

export default MoviesGenreWrapper;
