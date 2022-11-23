import React, { useState, useEffect } from "react";

import MessageModal from "../MessageModal";
import RenderedCast from "./RenderedCast";
import RenderedGenres from "./RenderedGenres";
import RenderedSpecificContent from "./RenderedSpecificContent";
import blankMedia from "../../images/cinema-clapboard.jpg";
import MediaOptionsButton from "./MediaOptionsButton";
import { createBackendDataObject } from "../../helperFunctions";
import useDelayUnmount from "../../hooks/useDelayUnmount";
import useDisplayMessage from "../../hooks/useDisplayMessage";
import "./index.scss";

const Details = ({ mediaData, castData, mediaType }) => {
  const [displayMessage, setDisplayMessage] = useDisplayMessage("");

  const shouldShowDisplayMessage = useDelayUnmount(displayMessage, 0);

  //if no media currently, don't show anything on screen.
  if (!Object.values(mediaData).length) {
    return null;
  }

  return (
    <div className="Details">
      <div className="Details__container container">
        <figure className="Details__image-container">
          <img
            src={
              mediaData.poster_path
                ? `http://image.tmdb.org/t/p/w500/${mediaData.poster_path}`
                : blankMedia
            }
            className="Details__image"
          />
          <MediaOptionsButton
            mediaData={createBackendDataObject(mediaData, mediaType)}
            setDisplayMessage={setDisplayMessage}
          />
        </figure>

        <div className="Details__info">
          <div className="Details__group">
            <div className="Details__header">
              <h1 className="Details__title">
                {mediaType === "movie" ? mediaData.title : mediaData.name}
              </h1>
              <p className="Details__body-text color-secondary">
                {mediaType === "movie" ? "movie" : "tv"}
              </p>
            </div>

            <p className="Details__tagline">{mediaData.tagline}</p>
          </div>

          {mediaData.imdb_id || mediaData.homepage ? (
            <div className="Details__group Details__horizontal">
              {mediaData.imdb_id ? (
                <a
                  href={`https://www.imdb.com/title/${mediaData.imdb_id}/`}
                  className="Details__external-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="Details__link-text">IMDB</span>
                </a>
              ) : null}

              {mediaData.homepage ? (
                <a
                  href={mediaData.homepage}
                  className="Details__external-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="Details__link-text">Website</span>
                </a>
              ) : null}
            </div>
          ) : null}

          <div className="Details__group Details__horizontal">
            {RenderedSpecificContent(mediaData, mediaType)}
          </div>

          <div className="Details__group">
            <p className="Details__subject">Genres</p>
            <div className="Details__genres ">
              {<RenderedGenres genres={mediaData.genres} />}
            </div>
          </div>

          <div className="Details__group">
            <p className="Details__subject">Synopsis</p>
            <p className="Details__body-text">{mediaData.overview}</p>
          </div>

          <div className="Details__group">
            <p className="Details__subject">Cast</p>
            <div className="Details__cast">
              {<RenderedCast cast={castData} />}
            </div>
          </div>
        </div>
      </div>

      {shouldShowDisplayMessage && (
        <MessageModal
          message={displayMessage}
          close={() => {
            setDisplayMessage("");
          }}
        />
      )}
    </div>
  );
};

export default Details;
