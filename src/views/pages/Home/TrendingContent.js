import React from "react";
import { useSelector } from "react-redux";
import ContentCard from "../../../components/ContentCard";

import blankPerson from "../../../images/blank-person.jpeg";
import blankMedia from "../../../images/cinema-clapboard.png";

const TrendingContent = () => {
  const trending = useSelector((state) => {
    return state.trending;
  });

  const allTrending = trending.map((media) => {
    const {
      id,
      title,
      release_date: releaseDate,
      media_type: mediaType,
      poster_path: mediaImage,
      name,
      known_for_department: knownFor,
      profile_path: personImage,
    } = media;

    if (mediaType === "person") {
      return (
        <ContentCard
          key={id}
          name={name}
          knownFor={knownFor}
          mediaType={mediaType}
          image={
            personImage
              ? `http://image.tmdb.org/t/p/h632/${personImage}`
              : blankPerson
          }
        />
      );
    }

    return (
      <ContentCard
        key={id}
        name={mediaType === "movie" ? title : name}
        releaseDate={releaseDate}
        mediaType={mediaType}
        image={
          mediaImage
            ? `http://image.tmdb.org/t/p/w500/${mediaImage}`
            : blankMedia
        }
      />
    );
  });

  return allTrending;
};

export default TrendingContent;
