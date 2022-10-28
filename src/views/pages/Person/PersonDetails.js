import React from "react";
import moment from "moment";

const PersonDetails = ({ data }) => {
  if (!Object.values(data).length) {
    return null;
  }

  return (
    <div className="Details">
      <div className="Details__container container">
        <figure className="Details__image-container">
          <img
            src={`http://image.tmdb.org/t/p/h632/${data.profile_path}`}
            className="Details__image"
          />
        </figure>

        <div className="Details__info">
          <div className="Details__group">
            <h1 className="Details__title">{data.name}</h1>
            <p className="Details__tagline">{data.known_for_department}</p>
          </div>

          {data.imdb_id || data.homepage ? (
            <div className="Details__group Details__horizontal">
              {data.imdb_id ? (
                <a
                  href={`https://www.imdb.com/name/${data.imdb_id}/`}
                  className="Details__external-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="Details__link-text">IMDB</span>
                </a>
              ) : null}

              {data.homepage ? (
                <a
                  href={data.homepage}
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
            <div className="Details__about">
              <p className="Details__subject">Birthday</p>
              <p className="Details__body-text">
                {data.birthday
                  ? moment(data.birthday).format("MMM  DD, YYYY")
                  : "N/A"}
              </p>
            </div>

            <div className="Details__about">
              <p className="Details__subject">Place of Birth</p>
              <p className="Details__body-text">{data.place_of_birth}</p>
            </div>
          </div>

          <div className="Details__group">
            <p className="Details__subject">Biography</p>
            <p className="Details__body-text">
              {data.biography ? data.biography : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
