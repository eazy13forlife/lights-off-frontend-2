import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import moment from "moment";

import useMovieDetails from "./useMovieDetails";
import ContentPageLayout from "../../../components/ContentPageLayout";
import "./index.scss";

const MovieDetails = () => {
  const navigate = useNavigate();

  const movieId = useParams().id;

  const movieDetails = useMovieDetails(movieId);

  const {
    title,
    tagline,
    genres = [],
    release_date,
    overview,
    poster_path,
    runtime,
    original_language,
    imdb_id,
  } = movieDetails.movie;

  let renderedGenres;

  if (genres.length) {
    renderedGenres = genres.map((genre, index) => {
      console.log(genre);
      return (
        <Link
          to={`/movies/genre/?id=${genre.id}&name=${genre.name}&page=1`}
          className="MovieDetails__link MovieDetails__link--light"
          key={index}
        >
          <span className="MovieDetails__link-text">{genre.name}</span>
        </Link>
      );
    });
  }

  const renderedCast = movieDetails.cast.map((castObject, index) => {
    return (
      <Link
        to=""
        className="MovieDetails__link MovieDetails__link--dark"
        key={index}
      >
        <span className="MovieDetails__link-text">{castObject.name}</span>
      </Link>
    );
  });

  return (
    <div className="MovieDetails color-light">
      <ContentPageLayout
        searchBarPlaceholder="Search for movies"
        onSearchSubmit={(e, searchValue) => {
          e.preventDefault();
          navigate(`/movies/search/?name=${searchValue}&page=1`);
        }}
      >
        <div className="MovieDetails__content">
          <div className="MovieDetails__container container">
            <figure className="MovieDetails__image-container">
              <img
                src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                className="MovieDetails__image"
              />
            </figure>

            <div className="MovieDetails__info">
              <div className="MovieDetails__group">
                <h1 className="MovieDetails__title">{title}</h1>
                <p className="MovieDetails__tagline">{tagline}</p>
              </div>

              <div className="MovieDetails__group MovieDetails__horizontal">
                <div className="MovieDetails__about">
                  <p className="MovieDetails__subject">Length</p>
                  <p className="MovieDetails__body-text">{`${runtime} min`}</p>
                </div>
                <div className="MovieDetails__about">
                  <p className="MovieDetails__subject">Language</p>
                  <p className="MovieDetails__body-text">{original_language}</p>
                </div>
                <div className="MovieDetails__about">
                  <p className="MovieDetails__subject">Year</p>
                  <p className="MovieDetails__body-text">
                    {moment(release_date).year()}
                  </p>
                </div>
              </div>

              <div className="MovieDetails__group">
                <p className="MovieDetails__subject">Genres</p>
                <div className="MovieDetails__genres">{renderedGenres}</div>
              </div>

              <div className="MovieDetails__group">
                <p className="MovieDetails__subject">Synopsis</p>
                <p className="MovieDetails__body-text">{overview}</p>
              </div>

              <div className="MovieDetails__group">
                <p className="MovieDetails__subject">Cast</p>
                <div className="MovieDetails__cast">{renderedCast}</div>
              </div>
            </div>
          </div>
        </div>
      </ContentPageLayout>
    </div>
  );
};

export default MovieDetails;
