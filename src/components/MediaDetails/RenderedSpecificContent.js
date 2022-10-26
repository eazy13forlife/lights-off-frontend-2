import React from "react";
import moment from "moment";

const RenderedSpecificContent = (mediaData, mediaType) => {
  if (mediaType === "movie") {
    return (
      <>
        <div className="MediaDetails__about">
          <p className="MediaDetails__subject">Length</p>
          <p className="MediaDetails__body-text">{`${mediaData.runtime} min`}</p>
        </div>
        <div className="MediaDetails__about">
          <p className="MediaDetails__subject">Language</p>
          <p className="MediaDetails__body-text">
            {mediaData.original_language}
          </p>
        </div>
        <div className="MediaDetails__about">
          <p className="MediaDetails__subject">Year</p>
          <p className="MediaDetails__body-text">
            {moment(mediaData.release_date).year()}
          </p>
        </div>
      </>
    );
  }

  if (mediaType === "tv") {
    return (
      <>
        <div className="MediaDetails__about">
          <p className="MediaDetails__subject">Language</p>
          <p className="MediaDetails__body-text">
            {mediaData.original_language}
          </p>
        </div>
        <div className="MediaDetails__about">
          <p className="MediaDetails__subject">First Air</p>
          <p className="MediaDetails__body-text">{mediaData.first_air_date}</p>
        </div>
        <div className="MediaDetails__about">
          <p className="MediaDetails__subject">Last Air</p>
          <p className="MediaDetails__body-text">{mediaData.last_air_date}</p>
        </div>
        <div className="MediaDetails__about">
          <p className="MediaDetails__subject">Status</p>
          <p className="MediaDetails__body-text">{mediaData.status}</p>
        </div>
      </>
    );
  }
};

export default RenderedSpecificContent;
