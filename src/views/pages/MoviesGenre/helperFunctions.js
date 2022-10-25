import axios from "axios";
import apiKeys from "../../../api";

const getSearchResponse = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeys.theMovieDb}&language=en-US&with_genre=${query.searchValue}&page=${query.pageNumber}`
  );

  return response;
};

export { getSearchResponse };
