import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import usePersonDetails from "./usePersonDetails";
import PersonDetails from "./PersonDetails";
import ContentPageLayout from "../../../components/ContentPageLayout";
import ContentCard from "../../../components/ContentCard";
import ContentGroup from "../../../components/ContentGroup";

const Person = () => {
  const navigate = useNavigate();

  const personId = useParams().id;

  const [details, credits] = usePersonDetails(personId);

  const renderedMovieCredits = credits.movie.map((data) => {
    return (
      <ContentCard data={{ ...data, media_type: "movie" }} key={data.id} />
    );
  });

  const renderedTvCredits = credits.tv.map((data) => {
    return <ContentCard data={{ ...data, media_type: "tv" }} key={data.id} />;
  });

  return (
    <div className="Person">
      <ContentPageLayout
        searchBarPlaceholder="Search for people"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/people/search/?name=${searchValue}&page=1`);
        }}
      >
        <PersonDetails data={details} />
        <ContentGroup
          content={renderedMovieCredits}
          title="All Movie Credits"
        />
        <ContentGroup content={renderedTvCredits} title="All TV Credits" />
      </ContentPageLayout>
    </div>
  );
};

export default Person;
