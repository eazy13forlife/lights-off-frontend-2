import React from "react";

import RenderedCast from "./RenderedCast";
import RenderedGenres from "./RenderedGenres";
import RenderedSpecificContent from "./RenderedSpecificContent";
import "./index.scss";

const MediaDetails = ({ mediaData, castData, mediaType }) => {
  return (
    <div className="MediaDetails">
      <div className="MediaDetails__container container">
        <figure className="MediaDetails__image-container">
          <img
            src={`http://image.tmdb.org/t/p/w500/${mediaData.poster_path}`}
            className="MediaDetails__image"
          />
        </figure>

        <div className="MediaDetails__info">
          <div className="MediaDetails__group">
            <h1 className="MediaDetails__title">
              {mediaType === "movie" ? mediaData.title : mediaData.name}
            </h1>
            <p className="MediaDetails__tagline">{mediaData.tagline}</p>
          </div>

          {mediaData.imdb_id || mediaData.homepage ? (
            <div className="MediaDetails__group MediaDetails__horizontal">
              {mediaData.imdb_id ? (
                <a
                  href={`https://www.imdb.com/title/${mediaData.imdb_id}/`}
                  className="MediaDetails__external-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="MediaDetails__link-text">IMDB</span>
                </a>
              ) : null}

              {mediaData.homepage ? (
                <a
                  href={mediaData.homepage}
                  className="MediaDetails__external-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="MediaDetails__link-text">Website</span>
                </a>
              ) : null}
            </div>
          ) : null}

          <div className="MediaDetails__group MediaDetails__horizontal">
            {RenderedSpecificContent(mediaData, mediaType)}
          </div>

          <div className="MediaDetails__group">
            <p className="MediaDetails__subject">Genres</p>
            <div className="MediaDetails__genres">
              {<RenderedGenres genres={mediaData.genres} />}
            </div>
          </div>

          <div className="MediaDetails__group">
            <p className="MediaDetails__subject">Synopsis</p>
            <p className="MediaDetails__body-text">{mediaData.overview}</p>
          </div>

          <div className="MediaDetails__group">
            <p className="MediaDetails__subject">Cast</p>
            <div className="MediaDetails__cast">
              {<RenderedCast cast={castData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
