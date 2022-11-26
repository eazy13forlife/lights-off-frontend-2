import axios from "axios";
import useUserAuthorization from "../../../hooks/useUserAuthorization";

import { BACKEND_URL } from "../../../constants";

const useSearchResponse = () => {
  const userInfo = useUserAuthorization();

  const getSearchResponse = async (query) => {
    return await axios.get(
      `${BACKEND_URL}/seen/search/?title=${query.searchValue}&page=${query.pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.authToken}`,
        },
      }
    );
  };

  return getSearchResponse;
};

export default useSearchResponse;
