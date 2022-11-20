import axios from "axios";

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

export {
  saveToLocalStorage,
  randomizeArray,
  createDataObjectFrontEnd,
  checkIfMediaExists,
};
