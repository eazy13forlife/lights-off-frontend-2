const getAllTrending = () => {
  return async (dispatch) => {
    const allTrending = [];

    const getTrendingMovies = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=aa7835518306593feca1d43f01ae2cb2"
      );

      return response.data.results;
    };

    const getTrendingTv = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=aa7835518306593feca1d43f01ae2cb2"
      );

      return response.data.results;
    };

    const getTrendingPeople = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/person/day?api_key=aa7835518306593feca1d43f01ae2cb2"
      );

      return response.data.results;
    };

    Promise.all([
      getTrendingMovies(),

      getTrendingTv(),

      getTrendingPeople(),
    ]).then((trending) => {
      trending.forEach((trendingGroup) => {
        allTrending.push(...trendingGroup);
      });
    });
  };
};
