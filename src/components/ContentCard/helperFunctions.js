import blankPerson from "../../images/blank-person.jpeg";
import blankMedia from "../../images/cinema-clapboard.png";

const getOnClickLink = (mediaType, mediaId) => {
  if (mediaType === "movie") {
    return `/movie/${mediaId}`;
  }

  if (mediaType === "tv") {
    return `/tv/${mediaId}`;
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

export { getOnClickLink, getImageSrc };
