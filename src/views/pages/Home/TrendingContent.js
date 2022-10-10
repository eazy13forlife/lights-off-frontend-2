import React from "react";
import useTrending from "./useTrending";
import MediaCard from "../../../components/ContentCards/MediaCard";
import PersonCard from "../../../components/ContentCards/PersonCard";

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
          image={personImage}
        />
      );
    }

    return (
      <MediaCard
        key={id}
        title={title}
        releaseDate={releaseDate}
        mediaType={mediaType}
        image={mediaImage}
      />
    );
  });

  return allTrending;
};

export default TrendingContent;
