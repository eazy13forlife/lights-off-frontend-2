import axios from "axios";
import moment from "moment";

const saveToLocalStorage = (name, data) => {
  const dataString = JSON.stringify(data);

  localStorage.setItem(name, dataString);
};

const swap = (array, index1, index2) => {
  const value1 = array[index1];

  array[index1] = array[index2];

  array[index2] = value1;
};

const randomizeArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, randomIndex, i);
  }
};

//turn  backend data object to an object recognized by frontend(going off imdb data object) for use
const createDataObjectFrontEnd = (data) => {
  return {
    media_type: data.media_type_id === 1 ? "movie" : "tv",
    id: data.media_id,
    poster_path: data.media_image,
    release_date:
      data.media_type_id === 1 ? data.release_year.toString() : null,
    first_air_date:
      data.media_type_id === 2 ? data.release_year.toString() : null,
    title: data.media_type_id === 1 ? data.title : null,
    name: data.media_type_id === 2 ? data.title : null,
  };
};

//if media exists a 200 success code will be thrown, otherwise an error
const checkIfMediaExists = async (BACKEND_URL, mediaId, authToken) => {
  const response = await axios.head(`${BACKEND_URL}/media/exists/${mediaId}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.status;
};

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

export {
  saveToLocalStorage,
  randomizeArray,
  createDataObjectFrontEnd,
  checkIfMediaExists,
  createBackendDataObject,
};
