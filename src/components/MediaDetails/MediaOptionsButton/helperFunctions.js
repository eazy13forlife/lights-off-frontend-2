import moment from "moment";
import axios from "axios";

//we will use this object to store the data required to make requests to our backend in order to save the imdb media to our database and then to be able to then ultimately add to favorites, seen,watch_next etc.
const createBackendDataObject = (mediaData, mediaType) => {
  //user_upload is not true or doesnt exist means it is imdb data. So, we are getting the necessary info from mediaData returned to us by imdb data and saving it in the keys that our backend takes in. (If I dont set user_account_id as null, a random one is generated and messes things up so set it). If imdb data, we only need to save certain things to our media database,in order to create the content card. When we actually want the media details of an imdb media we will call its api.
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

const onButtonClick = async (
  name,
  mediaData,
  authToken,
  setShowMediaOptions
) => {
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
      `http://localhost:3000/${name}/exists/${mediaData.media_id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    //if media doesn't exist in user_favorite table, add it in.
    if (existInFavoritesResponse === 404) {
      await axios.post(
        `http://localhost:3000/${name}/${mediaData.media_id}`,
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
};

export { createBackendDataObject, onButtonClick };
