import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import "./index.scss";

const MediaOptionsButton = ({ mediaData }) => {
  console.log;
  const [showMediaOptions, setShowMediaOptions] = useState(false);

  const authToken = useSelector((state) => {
    return state.userInfo.authToken;
  });

  return (
    <div className="MediaOptions">
      <button
        className="MediaOptions__button MediaOptions__button--title "
        onClick={() => {
          setShowMediaOptions(!showMediaOptions);
        }}
      >
        Options
      </button>
      {showMediaOptions ? (
        <div className="MediaOptions__options">
          <button
            className="MediaOptions__button MediaOptions__button--option  capitalize"
            onClick={async () => {
              try {
                const response = await axios.post(
                  "http://localhost:3000/media",
                  mediaData,
                  {
                    headers: {
                      Authorization: `Bearer ${authToken}`,
                    },
                  }
                );

                const favoritesResponse = await axios.post(
                  `http://localhost:3000/favorites/${mediaData.media_id}`,
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${authToken}`,
                    },
                  }
                );

                console.log(favoritesResponse);
              } catch (e) {
                console.log(e);
              } finally {
                setShowMediaOptions(false);
              }
            }}
          >
            Add to favorites
          </button>
          <button className="MediaOptions__button MediaOptions__button--option  capitalize">
            Add to seen
          </button>
          <button className="MediaOptions__button MediaOptions__button--option  capitalize">
            Add to watch next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MediaOptionsButton;
