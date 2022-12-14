import moment from "moment";

import blankPerson from "../../images/blank-person.jpg";
import blankMedia from "../../images/cinema-clapboard.jpg";

const getOnClickLink = (mediaType, mediaId) => {
  if (mediaType === "movie") {
    return `/movie/${mediaId}`;
  }

  if (mediaType === "tv") {
    return `/tv/${mediaId}`;
  }

  if (mediaType === "person") {
    return `/person/${mediaId}`;
  }
};

const getImageSrc = (data) => {
  if (data.media_type === "movie" || data.media_type === "tv") {
    return data.poster_path
      ? `http://image.tmdb.org/t/p/w500/${data.poster_path}`
      : blankMedia;
  }

  if (data.media_type === "person") {
    return data.profile_path
      ? `http://image.tmdb.org/t/p/h632/${data.profile_path}`
      : blankPerson;
  }
};

const getReleaseDate = (data) => {
  if (data.media_type === "movie") {
    return data.release_date ? moment(data.release_date).year() : "N/A";
  }

  if (data.media_type === "tv") {
    return data.first_air_date ? moment(data.first_air_date).year() : "N/A";
  }
};

export { getOnClickLink, getImageSrc, getReleaseDate };
