import React, { useState, useEffect } from "react";
import axios from "axios";

import apiKeys from "../../../api";

const useTvDetails = (tvId) => {
  const [tvDetails, setTvDetails] = useState({
    tv: {},
    cast: [],
  });

  useEffect(() => {
    const getTvDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return response.data;
    };

    const getCastDetails = async () => {
      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return creditsResponse.data.cast;
    };

    Promise.all([getTvDetails(), getCastDetails()]).then((results) => {
      setTvDetails({
        tv: results[0],
        cast: results[1],
      });
    });
  }, []);

  return tvDetails;
};

export default useTvDetails;
