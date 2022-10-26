import React, { useState, useEffect } from "react";
import apiKeys from "../api";
import axios from "axios";

const useMediaDetails = (mediaType, mediaId) => {
  const [mediaDetails, setMediaDetails] = useState({
    media: {},
    cast: [],
  });

  useEffect(() => {
    const getMediaDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return response.data;
    };

    const getCastDetails = async () => {
      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${apiKeys.theMovieDb}&language=en-US`
      );

      return creditsResponse.data.cast;
    };

    Promise.all([getMediaDetails(), getCastDetails()]).then((results) => {
      setMediaDetails({
        media: results[0],
        cast: results[1],
      });
    });
  }, []);

  return mediaDetails;
};

export default useMediaDetails;
