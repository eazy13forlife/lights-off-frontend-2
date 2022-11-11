import moment from "moment";

//we will use this object to store the data used to make requests to backend to save the imdb media to our database to be able to then ultimately add to favorites, seen,watch_next etc.
const createOptionsObject = (mediaData, mediaType) => {
  //user_upload is not true means it is imdb data. So get the correct imdb data based on mediaType. If i dont set user_account_id null, a random one is generated and messes things upm so set it
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

export { createOptionsObject };
