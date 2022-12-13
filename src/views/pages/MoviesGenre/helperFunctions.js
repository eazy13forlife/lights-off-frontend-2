import axios from "axios";
//import apiKeys from "../../../api";

const getSearchResponse = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&with_genres=${query.searchValue}&page=${query.pageNumber}`
  );

  return response;
};

export { getSearchResponse };
