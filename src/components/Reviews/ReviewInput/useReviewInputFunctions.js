import useUserAuthorization from "../../../hooks/useUserAuthorization";
import axios from "axios";

import { BACKEND_URL } from "../../../constants.js";

const useReviewInputFunctions = (mediaId, data, setJustModified) => {
  const userInfo = useUserAuthorization();

  const postReview = async () => {
    await axios.post(
      `${BACKEND_URL}/reviews/${mediaId}`,
      {
        review: data.review,
        rating: data.rating,
      },
      {
        headers: {
          Authorization: `Bearer ${userInfo.authToken}`,
        },
      }
    );

    setJustModified(true);
  };

  return postReview;
};

export default useReviewInputFunctions;
