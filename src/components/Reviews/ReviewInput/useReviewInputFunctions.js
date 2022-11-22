import useUserAuthorization from "../../../hooks/useUserAuthorization";
import axios from "axios";

import { checkIfMediaExists } from "../../../helperFunctions";
import { BACKEND_URL } from "../../../constants.js";
import { createBackendDataObject } from "../../MediaDetails/MediaOptionsButton/helperFunctions";

const useReviewInputFunctions = (
  mediaId,
  mediaData,
  mediaType,
  reviewData,
  setJustModified
) => {
  const userInfo = useUserAuthorization();

  const postReview = async () => {
    //check if media exists in database. If it doesn't, so we get a 404 error, add to database
    try {
      await checkIfMediaExists(BACKEND_URL, mediaId, userInfo.authToken);
    } catch (e) {
      if (e.response.status === 404) {
        await axios.post(
          `${BACKEND_URL}/media`,
          createBackendDataObject(mediaData, mediaType),
          {
            headers: {
              Authorization: `Bearer ${userInfo.authToken}`,
            },
          }
        );
      }
    }

    //post the review
    await axios.post(
      `${BACKEND_URL}/reviews/${mediaId}`,
      {
        review: reviewData.review,
        rating: reviewData.rating,
      },
      {
        headers: {
          Authorization: `Bearer ${userInfo.authToken}`,
        },
      }
    );

    //this causes a re-rendering of our reviews
    setJustModified(true);
  };

  return postReview;
};

export default useReviewInputFunctions;
