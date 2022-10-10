import React from "react";
import useTrending from "./useTrending";
import MediaCard from "../../../components/ContentCards/MediaCard";
import PersonCard from "../../../components/ContentCards/PersonCard";

import blankPerson from "../../../images/blank-person.jpeg";
import blankMedia from "../../../images/cinema-clapboard.png";

const TrendingContent = () => {
  //hook for getting current trending results <img src="http://image.tmdb.org/t/p/w500/4tHOplJqH1eg37cFBOWXkBTDTcB.jpg" />
  const trending = useTrending();

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
        <PersonCard
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
      <MediaCard
        key={id}
        title={title}
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
