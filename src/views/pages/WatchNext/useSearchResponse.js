import axios from "axios";

import { BACKEND_URL } from "../../../constants";
import useUserAuthorization from "../../../hooks/useUserAuthorization";

const useSearchResponse = () => {
  const userInfo = useUserAuthorization();

  const getSearchResponse = async (query) => {
    const response = await axios.get(
      `${BACKEND_URL}/watch-next/?page=${query.pageNumber}`,
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
