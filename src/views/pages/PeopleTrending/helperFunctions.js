import axios from "axios";

import apiKeys from "../../../api";

const getSearchResponse = async (query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/person/day?api_key=${apiKeys.theMovieDb}&page=${query.pageNumber}`
  );
};

export { getSearchResponse };
