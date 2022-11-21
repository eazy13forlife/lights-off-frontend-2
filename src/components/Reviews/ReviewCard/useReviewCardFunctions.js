import React from "react";
import axios from "axios";

import { BACKEND_URL } from "../../../constants";
import useUserAuthorization from "../../../hooks/useUserAuthorization";

const useReviewCardFunctions = (mediaId, setJustModified) => {
  const userInfo = useUserAuthorization();

  const deleteReview = async () => {
    await axios.delete(`${BACKEND_URL}/reviews/${mediaId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.authToken}`,
      },
    });

    setJustModified(true);
  };

  return { deleteReview };
};

export default useReviewCardFunctions;
