import React from "react";
import { useSearchParams } from "react-router-dom";

import TvGenre from "../TvGenre";

const TvGenreWrapper = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  return <TvGenre key={id} />;
};

export default TvGenreWrapper;
