import moment from "moment";
import axios from "axios";

import { BACKEND_URL } from "../../../constants";
//we will use this object to store the data required to make requests to our backend in order to save the imdb media to our database and then to be able to then ultimately add to favorites, seen,watch_next etc.
const createBackendDataObject = (mediaData, mediaType) => {
  //user_upload is not true or doesnt exist in our mediaData object means it is imdb data. So, we are getting the necessary info from mediaData returned to us by imdb data and saving it in the keys that our backend takes in. (If I dont set user_account_id as null, a random one is generated and messes things up so set it). If imdb data, we only need to save certain things to our media database,in order to create the content card. When we actually want the media details of an imdb media we will call its api.
  if (!mediaData.user_upload && mediaType === "movie") {
    return {
      media_id: mediaData.id,
      media_source_id: 1,
      media_type_id: 1,
      user_account_id: null,
      title: mediaData.title,
      release_year: mediaData.release_date
        ? moment(mediaData.release_date).year()
        : null,
      media_image: mediaData.poster_path ? mediaData.poster_path : null,
    };
  }

  if (!mediaData.user_upload && mediaType === "tv") {
    return {
      media_id: mediaData.id,
      media_source_id: 1,
      media_type_id: 2,
      user_account_id: null,
      title: mediaData.name,
      release_year: mediaData.first_air_date
        ? moment(mediaData.first_air_date).year()
        : null,
      media_image: mediaData.poster_path ? mediaData.poster_path : null,
    };
  }
};

//adds media to media database if not already in there
const addMediaToDatabase = async (mediaData, authToken) => {
  try {
    //check to see if media already exists in media database
    const existInMediaResponse = await axios.head(
      `${BACKEND_URL}/media/exists/${mediaData.media_id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
  } catch (e) {
    //if it doesnt exist, add to media database
    if (e.response.status === 404) {
      await axios.post(`${BACKEND_URL}/media`, mediaData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    }
  }
};

//adds media to the specific category we want if not already in there.
const addMediaToCategory = async (
  category,
  mediaData,
  authToken,
  displayMessageBox
) => {
  try {
    //check to see if media already exists in user_favorite database. If it does,so we get a 200 code, we send message saying already created
    const existInFavoritesResponse = await axios.head(
      `${BACKEND_URL}/${category}/exists/${mediaData.media_id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    displayMessageBox("Already added");
  } catch (e) {
    //if it doesnt exist, add it in. include a message saying created
    if (e.response.status === 404) {
      await axios.post(
        `${BACKEND_URL}/${category}/${mediaData.media_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      displayMessageBox("Added!");
    }
  }
};

const onButtonClick = async (
  category,
  mediaData,
  authToken,
  setShowMediaOptions,
  displayMessageBox
) => {
  try {
    await addMediaToDatabase(mediaData, authToken);

    await addMediaToCategory(category, mediaData, authToken, displayMessageBox);
  } catch (e) {
    displayMessageBox("Unable to add!");
    console.log(e);
  } finally {
    setShowMediaOptions(false);
  }
};

export { createBackendDataObject, onButtonClick };
