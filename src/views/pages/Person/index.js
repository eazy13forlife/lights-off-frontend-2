import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import usePersonDetails from "./usePersonDetails";
import PersonDetails from "./PersonDetails";
import ContentPageLayout from "../../../components/ContentPageLayout";
import ContentCard from "../../../components/ContentCard";
import ContentGroup from "../../../components/ContentGroup";
import PaginatedContentGroup2 from "../../../components/PaginatedContentGroup2";
import "./index.scss";

const Person = () => {
  const navigate = useNavigate();

  const personId = useParams().id;

  const [details, credits] = usePersonDetails(personId);

  const [creditType, setCreditType] = useState("movie");

  const renderedMovieCredits = credits.movie.map((result) => {
    if (result.media_type) {
      return <ContentCard data={result} key={result.credit_id} />;
    } else {
      return (
        <ContentCard
          data={{ ...result, media_type: "movie" }}
          key={result.credit_id}
        />
      );
    }
  });

  const renderedTVCredits = credits.tv.map((result) => {
    if (result.media_type) {
      return <ContentCard data={result} key={result.credit_id} />;
    } else {
      return (
        <ContentCard
          data={{ ...result, media_type: "tv" }}
          key={result.credit_id}
        />
      );
    }
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

        <div className="Person__buttons">
          <button
            className="Person__button"
            onClick={() => {
              setCreditType("movie");
            }}
          >
            <span className="Person__button-text Details__body-text">
              Get Movie Credits
            </span>
          </button>
          <button
            className="Person__button"
            onClick={() => {
              setCreditType("tv");
            }}
          >
            <span className="Person__button-text Details__body-text">
              Get TV Credits
            </span>
          </button>
        </div>

        {creditType === "movie" ? (
          <PaginatedContentGroup2
            content={renderedMovieCredits}
            itemsPerPage={15}
            mediaType="movie"
            subject="All Movie Credits"
          />
        ) : (
          <PaginatedContentGroup2
            content={renderedTVCredits}
            itemsPerPage={15}
            mediaType="tv"
            subject="All TV Credits"
          />
        )}
      </ContentPageLayout>
    </div>
  );
};

export default Person;
