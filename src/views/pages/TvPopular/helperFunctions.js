import axios from "axios";
import apiKeys from "../../../api";

const getSearchResponse = async (query) => {
  return await axios.get(
    `
    https://api.themoviedb.org/3/tv/popular?api_key=${apiKeys.theMovieDb}&language=en-US&page=${query.pageNumber}`
  );
};

export { getSearchResponse };
