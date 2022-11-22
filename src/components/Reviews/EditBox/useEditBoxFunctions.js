import axios from "axios";

import { BACKEND_URL } from "../../../constants";
import useUserAuthorization from "../../../hooks/useUserAuthorization";

const useEditBoxFunctions = (mediaId, data, setJustModified) => {
  const userInfo = useUserAuthorization();

  const editReview = async () => {
    await axios.patch(`${BACKEND_URL}/reviews/${mediaId}`, data, {
      headers: {
        Authorization: `Bearer ${userInfo.authToken}`,
      },
    });

    setJustModified(true);
  };

  return editReview;
};

export default useEditBoxFunctions;
