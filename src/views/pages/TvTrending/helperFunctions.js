import axios from "axios";
import apiKeys from "../../../api";

const getSearchResponse = async (query) => {
  return await axios.get(
    `
    https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_MOVIE_DB_API}&page=${query.pageNumber}`
  );
};

export { getSearchResponse };
