import axios from "axios";

const getSearchResponse = async (query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=${query.pageNumber}`
  );
};

export { getSearchResponse };
