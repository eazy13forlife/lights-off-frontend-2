import useUserAuthorization from "../../../hooks/useUserAuthorization";
import axios from "axios";

import { BACKEND_URL } from "../../../constants.js";

const useReviewInputFunctions = (mediaId, data) => {
  const userInfo = useUserAuthorization();

  const postReview = async () => {
    const response = await axios.post(
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
  };

  return postReview;
};

export default useReviewInputFunctions;
