import React from "react";
import moment from "moment";

const RenderedSpecificContent = (mediaData, mediaType) => {
  if (mediaType === "movie") {
    return (
      <>
        <div className="Details__about">
          <p className="Details__subject">Length</p>
          <p className="Details__body-text">{`${mediaData.runtime} min`}</p>
        </div>
        <div className="Details__about">
          <p className="Details__subject">Language</p>
          <p className="Details__body-text">{mediaData.original_language}</p>
        </div>
        <div className="Details__about">
          <p className="Details__subject">Year</p>
          <p className="Details__body-text">
            {mediaData.releaseDate
              ? moment(mediaData.release_date).year()
              : "N/A"}
          </p>
        </div>
      </>
    );
  }

  if (mediaType === "tv") {
    return (
      <>
        <div className="Details__about">
          <p className="Details__subject">Language</p>
          <p className="Details__body-text">{mediaData.original_language}</p>
        </div>
        <div className="Details__about">
          <p className="Details__subject">First Air</p>
          <p className="Details__body-text">
            {mediaData.first_air_date
              ? moment(mediaData.first_air_date).format("MMM DD, YYYY")
              : "N/A"}
          </p>
        </div>
        <div className="Details__about">
          <p className="Details__subject">Last Air</p>
          <p className="Details__body-text">
            {mediaData.last_air_date
              ? moment(mediaData.last_air_date).format("MMM DD, YYYY")
              : "N/A"}
          </p>
        </div>
        <div className="Details__about">
          <p className="Details__subject">Status</p>
          <p className="Details__body-text">{mediaData.status}</p>
        </div>
      </>
    );
  }
};

export default RenderedSpecificContent;
