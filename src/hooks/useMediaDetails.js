import { useState, useEffect } from "react";
import axios from "axios";

const useMediaDetails = (mediaType, mediaId) => {
  const [mediaDetails, setMediaDetails] = useState({
    media: {},
    cast: [],
    directors: [],
    writers: [],
  });

  useEffect(() => {
    const getMediaDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
      );

      return response.data;
    };

    const getCreditsDetails = async () => {
      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
      );

      return creditsResponse.data;
    };

    Promise.all([getMediaDetails(), getCreditsDetails()]).then((results) => {
      //get all the directors and writers from the credits object
      const directors = [];

      //multiple writers appear many times so let's keep track of them
      const writersSeen = {};

      const writers = [];

      results[1].crew.forEach((crewObj) => {
        if (mediaType === "movie") {
          if (crewObj.job === "Director") {
            directors.push(crewObj);
          }
        }

        if (mediaType === "tv") {
          if (crewObj.known_for_department === "Directing") {
            directors.push(crewObj);
          }
        }

        //only add writer to writers array if we haven't added that writer yet
        if (crewObj.known_for_department === "Writing") {
          if (!(crewObj.id in writersSeen)) {
            writersSeen[crewObj.id] = true;
            writers.push(crewObj);
          }
        }
      });

      setMediaDetails({
        media: results[0],
        cast: results[1].cast,
        directors: directors,
        writers: writers,
      });
    });
  }, []);

  return mediaDetails;
};

export default useMediaDetails;
