import apiKeys from "../../../api";
import axios from "axios";

const getSearchResponse = async (query) => {
  console.log(query);
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${apiKeys.theMovieDb}&language=en-US&page=${query.pageNumber}&include_adult=false&query=${query.searchValue}`
  );

  return response;
};

export { getSearchResponse };
