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
                //check to see if media already exists in media database
                const existInMediaResponse = await axios.head(
                  `http://localhost:3000/media/exists/${mediaData.media_id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${authToken}`,
                    },
                  }
                );

                //if media doesnt already exist in media database, we can add media to media database
                if (existInMediaResponse.status === 404) {
                  await axios.post("http://localhost:3000/media", mediaData, {
                    headers: {
                      Authorization: `Bearer ${authToken}`,
                    },
                  });
                }

                //check to see if media already exists in user_favorite database
                const existInFavoritesResponse = await axios.head(
                  `http://localhost:3000/favorites/exists/${mediaData.media_id}`,
                  {
                    headers: {
                      Authorization: `Bearer ${authToken}`,
                    },
                  }
                );

                //if media doesn't exist in user_favorite table, add it in.
                if (existInFavoritesResponse === 404) {
                  await axios.post(
                    `http://localhost:3000/favorites/${mediaData.media_id}`,
                    {},
                    {
                      headers: {
                        Authorization: `Bearer ${authToken}`,
                      },
                    }
                  );
                  //create a created message box
                  return;
                }

                //if we are here, that means nothing was added to favorites, because it was already created
                //create an already created message box
              } catch (e) {
                //create error message box
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
