import axios from "axios";

const getSearchResponse = async (query) => {
  const response = await axios.get(
    `http://localhost:3000/favorites/?page=${query.pageNumber}`,
    {},
    {
      headers: {
        Authorization: `Bearer `,
      },
    }
  );

  return response;
};

export { getSearchResponse };
