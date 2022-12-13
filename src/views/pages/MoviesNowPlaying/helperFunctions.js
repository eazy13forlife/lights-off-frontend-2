import axios from "axios";
//import apiKeys from "../../../api";

const getSearchResponse = async (query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=${query.pageNumber}`
  );
};

export { getSearchResponse };
