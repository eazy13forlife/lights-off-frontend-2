import axios from "axios";
import apiKeys from "../../../api";

const getSearchResponse = async (query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKeys.theMovieDb}&language=en-US&with_genres=${query.searchValue}&page=${query.pageNumber}`
  );
};

export { getSearchResponse };
