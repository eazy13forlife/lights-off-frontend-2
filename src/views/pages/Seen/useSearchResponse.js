import axios from "axios";

import useUserAuthorization from "../../../hooks/useUserAuthorization";
import { BACKEND_URL } from "../../../constants";

const useSearchResponse = () => {
  const userInfo = useUserAuthorization();

  const getSearchResponse = async (query) => {
    const response = await axios.get(
      `${BACKEND_URL}/seen/?page=${query.pageNumber}`,
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
