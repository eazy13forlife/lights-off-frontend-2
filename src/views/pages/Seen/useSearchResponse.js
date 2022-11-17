import axios from "axios";

import useUserAuthorization from "../../../hooks/useUserAuthorization";

const useSearchResponse = () => {
  const userInfo = useUserAuthorization();

  const getSearchResponse = async (query) => {
    const response = await axios.get(
      `http://localhost:3000/seen/?page=${query.pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.authToken} `,
        },
      }
    );
    return response;
  };

  return getSearchResponse;
};

export default useSearchResponse;
