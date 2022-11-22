import axios from "axios";

import { BACKEND_URL } from "../../../constants";
import { checkIfMediaExists } from "../../../helperFunctions";

//adds media to media database if not already in there
const addMediaToDatabase = async (mediaData, authToken) => {
  try {
    //check to see if media already exists in media database. If so, no error will be thrown because response status will be 200.
    await checkIfMediaExists(BACKEND_URL, mediaData.media_id, authToken);
  } catch (e) {
    //if it doesnt exist, add to media database
    if (e.response.status === 404) {
      await axios.post(`${BACKEND_URL}/media`, mediaData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    } else {
      throw new Error(e);
    }
  }
};

//adds media to the specific category we want if not already in there.
const addMediaToCategory = async (
  category,
  mediaData,
  authToken,
  setDisplayMessage
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

    setDisplayMessage("Already added");
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

      setDisplayMessage("Added!");
    } else {
      throw new Error(e);
    }
  }
};

const onButtonClick = async (
  category,
  mediaData,
  authToken,
  setShowMediaOptions,
  setDisplayMessage
) => {
  try {
    setDisplayMessage("");

    await addMediaToDatabase(mediaData, authToken);

    await addMediaToCategory(category, mediaData, authToken, setDisplayMessage);
  } catch (e) {
    setDisplayMessage("Unable to add!");
  } finally {
    setShowMediaOptions(false);
  }
};

export { onButtonClick };
